import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { text, aiModel } = body;
    
    if (!text) {
      return NextResponse.json({ error: { message: 'Teks tidak boleh kosong' } }, { status: 400 });
    }

    const systemPrompt = "Anda adalah kamus cerdas bahasa Arab - Indonesia (Al-Hiwar).\n" +
"Tugas Anda adalah menerjemahkan kata yang diberikan oleh pengguna ke dalam bahasa Arab (jika input bahasa Indonesia) atau ke dalam bahasa Indonesia (jika input bahasa Arab).\n" +
"SANGAT PENTING: Anda hanya boleh merespons HANYA dengan format JSON yang kaku dan valid. Tidak boleh ada teks tambahan, penjelasan, atau blok markdown.\n" +
"Format JSON yang diwajibkan:\n" +
"{\n" +
"  \"arabic\": \"kata terjemahan dalam teks Arab asli (dengan harakat lengkap)\",\n" +
"  \"transliteration\": \"cara baca latin dari kata Arab tersebut huruf kecil\",\n" +
"  \"type\": \"Jenis kata dalam bahasa Inggris (Noun, Verb, Adjective, Preposition, dll)\"\n" +
"}\n\n" +
"Pastikan transliterasi latin sesuai kaidah penulisan yang umum dipakai di Indonesia.";

    const contents = [
      {
        role: "user",
        parts: [{ text: "System instruction: " + systemPrompt + "\n\nUser input: " + text }]
      }
    ];

    const apiKey = process.env.GEMINI_API_KEY || '';
    if (!apiKey) {
      return NextResponse.json({ error: { message: 'API Key Backend Belum Dikonfigurasi (GEMINI_API_KEY)' } }, { status: 500 });
    }

    const modelToUse = aiModel || 'gemini-3.5-flash-lite';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelToUse}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: contents,
        generationConfig: {
          responseMimeType: "application/json"
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Gagal menghubungi Gemini API');
    }

    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    
    try {
      const cleanJsonStr = aiText.replace(/\x60\x60\x60json/g, '').replace(/\x60\x60\x60/g, '').trim();
      const resultObj = JSON.parse(cleanJsonStr);
      return NextResponse.json(resultObj, { status: 200 });
    } catch (parseError) {
      console.error("Gagal parse JSON dari Gemini:", aiText);
      return NextResponse.json({ error: { message: 'Respons AI tidak valid formatnya' } }, { status: 500 });
    }

  } catch (error: any) {
    return NextResponse.json({ error: { message: error.message } }, { status: 500 });
  }
}
