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
"  \"arabic\": \"Teks Arab asli (dengan harakat lengkap)\",\n" +
"  \"indonesian\": \"Makna atau terjemahan dalam bahasa Indonesia\",\n" +
"  \"transliteration\": \"Cara baca teks Arab tersebut dalam huruf latin\",\n" +
"  \"type\": \"Jenis kata dalam bahasa Inggris (Noun, Verb, Adjective, Preposition, dll)\"\n" +
"}\n\n" +
"Pastikan transliterasi latin sesuai kaidah penulisan yang umum dipakai di Indonesia.";

    const { GoogleGenerativeAI } = require('@google/generative-ai');
    
    const apiKey = process.env.GEMINI_API_KEY || '';
    if (!apiKey) {
      return NextResponse.json({ error: { message: 'API Key Backend Belum Dikonfigurasi (GEMINI_API_KEY)' } }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const modelToUse = aiModel || 'gemini-3.8-flash';
    
    const model = genAI.getGenerativeModel({
      model: modelToUse,
      systemInstruction: systemPrompt,
      generationConfig: {
        responseMimeType: "application/json",
      }
    });

    try {
      const result = await model.generateContent(text);
      const aiText = result.response.text();
      
      try {
        const cleanJsonStr = aiText.replace(/\x60\x60\x60json/g, '').replace(/\x60\x60\x60/g, '').trim();
        const resultObj = JSON.parse(cleanJsonStr);
        return NextResponse.json(resultObj, { status: 200 });
      } catch (parseError) {
        console.error("Gagal parse JSON dari Gemini:", aiText);
        return NextResponse.json({ error: { message: 'Respons AI tidak valid formatnya' } }, { status: 500 });
      }
    } catch (geminiError: any) {
      // FALLBACK: Coba gunakan Groq jika Gemini error
      try {
        const groqApiKey = process.env.GROQ_API_KEY;
        if (groqApiKey) {
          const Groq = require('groq-sdk');
          const groq = new Groq({ apiKey: groqApiKey });
          
          const chatCompletion = await groq.chat.completions.create({
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: text }
            ],
            model: 'llama3-8b-8192',
            response_format: { type: 'json_object' }
          });
          
          const aiText = chatCompletion.choices[0]?.message?.content || "";
          const cleanJsonStr = aiText.replace(/\x60\x60\x60json/g, '').replace(/\x60\x60\x60/g, '').trim();
          const resultObj = JSON.parse(cleanJsonStr);
          return NextResponse.json(resultObj, { status: 200 });
        }
      } catch (groqError: any) {
        console.error('Groq fallback failed:', groqError);
      }
  
      return NextResponse.json({ error: { message: geminiError.message } }, { status: 500 });
    }

  } catch (error: any) {
    return NextResponse.json({ error: { message: error.message } }, { status: 500 });
  }
}
