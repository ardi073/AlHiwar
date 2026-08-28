import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userText, aiScenario, aiChatHistory, aiModel } = body;
    
    const systemPrompt = "Anda adalah \"Ustadz Al-Hiwar\", seorang tutor belajar bahasa Arab-Indonesia yang sangat ramah.\n" +
"Tugas Anda adalah membalas pesan pengguna dalam bentuk percakapan sehari-hari.\n" +
"SANGAT PENTING: Anda HANYA boleh merespons dalam format JSON murni. Jangan tambahkan teks apa pun di luar JSON, jangan gunakan blok markdown.\n" +
"Format JSON yang diwajibkan:\n" +
"{\n" +
"  \"ar\": \"Balasan Anda dalam 1 atau 2 kalimat pendek berbahasa Arab dengan Harakat lengkap yang benar\",\n" +
"  \"latin\": \"Cara bacanya (transliterasi Latin) huruf kecil\",\n" +
"  \"id\": \"Arti terjemahannya dalam Bahasa Indonesia. Jika pengguna melakukan kesalahan, berikan koreksi ramah di sini. Selalu akhiri dengan pertanyaan sederhana untuk melanjutkan topik skenario: " + (aiScenario || 'general') + "\",\n" +
"}";

    const contents = [];
    
    if (aiChatHistory && Array.isArray(aiChatHistory) && aiChatHistory.length > 0) {
      const historyToSend = aiChatHistory.slice(-8);
      historyToSend.forEach(msg => {
        contents.push({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.sender === 'user' ? msg.ar : JSON.stringify({ ar: msg.ar, latin: msg.latin, id: msg.id }) }]
        });
      });
    }

    contents.push({
      role: "user",
      parts: [{ text: "System instruction: " + systemPrompt + "\n\nUser input: " + userText }]
    });

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
    
    // Return the raw response back to frontend (which now contains JSON)
    return NextResponse.json(data, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: { message: error.message } }, { status: 500 });
  }
}
