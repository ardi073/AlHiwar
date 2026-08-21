export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  try {
    const body = await req.json();
    const { query, aiModel } = body;
    
    const systemPrompt = `Anda adalah sistem kamus dwibahasa (Arab-Indonesia).
Tugas Anda adalah menerjemahkan kata atau frasa pendek yang diberikan oleh pengguna.
Jika pengguna memberikan kata bahasa Indonesia, terjemahkan ke bahasa Arab.
Jika pengguna memberikan kata bahasa Arab, terjemahkan ke bahasa Indonesia.
BERIKAN RESPON HANYA DALAM FORMAT JSON SEPERTI BERIKUT TANPA MARKDOWN ATAU TEKS TAMBAHAN:
{
  "ar": "tulisan arab dengan harakat lengkap",
  "latin": "transliterasi latin cara bacanya",
  "id": "arti dalam bahasa indonesia",
  "category": "Kategori kata (misal: Kata Benda, Kata Kerja, Kata Sifat, dll)"
}`;

    const contents = [
      {
        role: "user",
        parts: [{ text: `System instruction: ${systemPrompt}\n\nTerjemahkan kata ini: ${query}` }]
      }
    ];

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
    
    // Parse the JSON out of the response text
    if (data.candidates && data.candidates[0].content.parts[0].text) {
        let textResult = data.candidates[0].content.parts[0].text.trim();
        // Remove markdown formatting if any
        textResult = textResult.replace(/^```json/g, "").replace(/^```/g, "").replace(/```$/g, "").trim();
        
        let parsedResult;
        try {
            parsedResult = JSON.parse(textResult);
            return new Response(JSON.stringify(parsedResult), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (e) {
             return new Response(JSON.stringify({ error: 'Failed to parse AI response as JSON', raw: textResult }), { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    } else {
        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' }
        });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500, 
      headers: { 'Content-Type': 'application/json' } 
    });
  }
}
