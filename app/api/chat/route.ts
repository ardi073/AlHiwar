import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userText, aiScenario, aiChatHistory, aiModel } = body;
    
    // System Prompt safely hidden in the backend
    const systemPrompt = `Anda adalah "Ustadz Al-Hiwar", seorang tutor belajar bahasa Arab-Indonesia yang sangat ramah. 
Tugas Anda adalah membalas pesan pengguna dalam bentuk percakapan sehari-hari.
Aturan respon Anda:
1. Tulis balasan Anda dalam 1 atau 2 kalimat pendek berbahasa Arab dengan Harakat lengkap yang benar.
2. Di baris baru setelah bahasa Arab, berikan cara bacanya (transliterasi Latin) tanpa tanda kurung.
3. Di baris baru setelah transliterasi, tulis arti terjemahannya dalam Bahasa Indonesia tanpa tanda kurung.
4. Jika pengguna melakukan kesalahan penulisan atau tata bahasa Arab, berikan koreksi atau masukan ramah di bagian paling bawah.
5. Pertahankan alur percakapan dengan menanyakan pertanyaan sederhana terkait topik skenario: ${aiScenario || 'general'}.

(Pastikan setiap bagian Arab, Latin, dan Indo dipisah dengan newline/enter tanpa prefix teks tambahan seperti "Arab:" atau "Latin:").`;

    const contents = [];
    
    // Map previous chat history to Gemini format
    if (aiChatHistory && Array.isArray(aiChatHistory) && aiChatHistory.length > 0) {
      const historyToSend = aiChatHistory.slice(-8); // Keep last 4 interactions
      historyToSend.forEach(msg => {
        contents.push({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.sender === 'user' ? msg.ar : (msg.ar + "\n" + msg.latin + "\n" + msg.id) }]
        });
      });
    }

    // Append the current user instruction
    contents.push({
      role: "user",
      parts: [{ text: `System instruction: ${systemPrompt}\n\nUser input: ${userText}` }]
    });

    const apiKey = process.env.GEMINI_API_KEY || '';
    if (!apiKey) {
      return NextResponse.json({ error: { message: 'API Key Backend Belum Dikonfigurasi (GEMINI_API_KEY)' } }, { status: 500 });
    }

    const modelToUse = aiModel || 'gemini-pro';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelToUse}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: contents })
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });

  } catch (error: any) {
    return NextResponse.json({ error: { message: error.message } }, { status: 500 });
  }
}
