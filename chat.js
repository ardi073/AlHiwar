export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  try {
    const body = await req.json();
    const { userText, aiScenario, aiChatHistory, aiModel } = body;
    
    // System Prompt safely hidden in the backend
    const systemPrompt = `Anda adalah "Ustadz Al-Hiwar", seorang tutor belajar bahasa Arab-Indonesia yang sangat ramah. 
Tugas Anda adalah membalas pesan pengguna dalam bentuk percakapan sehari-hari.
Aturan respon Anda:
1. Tulis balasan Anda dalam 1 atau 2 kalimat pendek berbahasa Arab dengan Harakat lengkap yang benar.
2. Di baris baru setelah bahasa Arab, berikan cara bacanya (transliterasi Latin) di dalam tanda kurung siku seperti ini: [Cara baca Latin].
3. Di baris baru setelah transliterasi, tulis arti terjemahannya dalam Bahasa Indonesia di dalam tanda kurung siku seperti ini: [Arti Bahasa Indonesia].
4. Jika pengguna melakukan kesalahan penulisan atau tata bahasa Arab, berikan koreksi atau masukan ramah di bagian paling bawah dalam Bahasa Indonesia tanpa tanda kurung.
5. Pertahankan alur percakapan dengan menanyakan pertanyaan sederhana terkait topik skenario: ${aiScenario || 'general'}.

Contoh Respon:
مَرْحَبًا! كَيْفَ حَالُكَ؟
[Marhaban! Kaifa haaluka?]
[Halo! Bagaimana kabarmu?]`;

    const contents = [];
    
    // Map previous chat history to Gemini format
    if (aiChatHistory && Array.isArray(aiChatHistory) && aiChatHistory.length > 0) {
      const historyToSend = aiChatHistory.slice(-8); // Keep last 4 interactions
      historyToSend.forEach(msg => {
        contents.push({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.sender === 'user' ? msg.text : (msg.ar + "\n[" + msg.latin + "]\n[" + msg.id + "]") }]
        });
      });
    }

    // Append the current user instruction
    contents.push({
      role: "user",
      parts: [{ text: `System instruction: ${systemPrompt}\n\nUser input: ${userText}` }]
    });

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API Key Backend Belum Dikonfigurasi di Vercel' }), { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }

    const modelToUse = aiModel || 'gemini-1.5-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelToUse}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: contents })
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500, 
      headers: { 'Content-Type': 'application/json' } 
    });
  }
}
