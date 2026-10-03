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

    const { GoogleGenerativeAI } = require('@google/generative-ai');
    
    const apiKey = process.env.GEMINI_API_KEY || '';
    if (!apiKey) {
      return NextResponse.json({ error: { message: 'API Key Backend Belum Dikonfigurasi (GEMINI_API_KEY)' } }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const modelToUse = aiModel || 'gemini-1.5-flash';
    
    const model = genAI.getGenerativeModel({
      model: modelToUse,
      systemInstruction: systemPrompt,
      generationConfig: {
        responseMimeType: "application/json",
      }
    });

    const history: any[] = [];
    if (aiChatHistory && Array.isArray(aiChatHistory) && aiChatHistory.length > 0) {
      const historyToSend = aiChatHistory.slice(-8);
      historyToSend.forEach((msg: any) => {
        history.push({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.sender === 'user' ? msg.ar : JSON.stringify({ ar: msg.ar, latin: msg.latin, id: msg.id }) }]
        });
      });
      
      // Google Generative AI SDK requires the first message in history to be from 'user'
      if (history.length > 0 && history[0].role === 'model') {
        history.shift(); // Remove the first 'model' message if it's at the beginning
      }
    }

    const chat = model.startChat({
      history: history,
    });

    let responseText = "";
    try {
      const result = await chat.sendMessage(userText);
      responseText = result.response.text();
    } catch (geminiError: any) {
      console.error("Gemini failed, trying Groq fallback:", geminiError);
      const groqApiKey = process.env.GROQ_API_KEY;
      if (groqApiKey) {
        try {
          const Groq = require('groq-sdk');
          const groq = new Groq({ apiKey: groqApiKey });
          
          const groqMessages: any[] = [
            { role: 'system', content: systemPrompt }
          ];
          
          if (aiChatHistory && Array.isArray(aiChatHistory)) {
             aiChatHistory.slice(-8).forEach((msg: any) => {
               groqMessages.push({
                 role: msg.sender === 'user' ? 'user' : 'assistant',
                 content: msg.sender === 'user' ? msg.ar : JSON.stringify({ ar: msg.ar, latin: msg.latin, id: msg.id })
               });
             });
          }
          groqMessages.push({ role: 'user', content: userText });
          
          // Ambil daftar model secara dinamis khusus untuk API Key ini
          const modelsResponse = await groq.models.list();
          const activeModels = modelsResponse.data.map((m: any) => m.id);
          
          // Singkirkan model khusus yang bukan chatbot (seperti penjaga/guard, suara, alat)
          const textModels = activeModels.filter((id: string) => !id.includes('guard') && !id.includes('whisper') && !id.includes('tool') && !id.includes('vision'));
          
          // Pilih model terbaik yang tersedia (prioritas dari atas ke bawah)
          const dynamicModel = textModels.find((id: string) => id.includes('llama-3.1-8b'))
            || textModels.find((id: string) => id.includes('llama-3.3'))
            || textModels.find((id: string) => id.includes('llama'))
            || textModels.find((id: string) => id.includes('mixtral'))
            || textModels.find((id: string) => id.includes('gemma'))
            || textModels[0];

          const chatCompletion = await groq.chat.completions.create({
            messages: groqMessages,
            model: dynamicModel || 'llama-3.1-8b-instant', // fallback akhir
          });
          
          responseText = chatCompletion.choices[0]?.message?.content || "";
        } catch (groqError: any) {
          console.error('Groq fallback failed:', groqError);
          return NextResponse.json({ error: { message: "[Fallback Gagal] Groq Error: " + groqError.message } }, { status: 500 });
        }
      } else {
        return NextResponse.json({ error: { message: "[Groq API Key Belum Ada] Gemini Error: " + geminiError.message } }, { status: 500 });
      }
    }
    
    const data = {
      candidates: [
        {
          content: {
            parts: [{ text: responseText }]
          }
        }
      ]
    };
    return NextResponse.json(data, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: { message: error.message } }, { status: 500 });
  }
}
