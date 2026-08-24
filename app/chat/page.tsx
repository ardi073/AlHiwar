"use client";
import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import { ChevronDown, Trash2, Mic, Volume2, Lock } from 'lucide-react';

export default function ChatPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState('Perkenalan');
  
  const [chatHistory, setChatHistory] = useState<{sender: string, ar: string, latin?: string, id?: string}[]>([
    {
      sender: 'ai',
      ar: 'السَّلَامُ عَلَيْكُمْ! أَنَا أُسْتَاذُ الْحِوَار. كَيْفَ حَالُكَ الْيَوْمَ؟',
      latin: 'As-salaamu \'alaikum! Ana ustadzul hiwaar. Kaifa haaluka al-yaum?',
      id: 'Semoga keselamatan tercurah untukmu! Saya Ustadz Al-Hiwar. Bagaimana kabarmu hari ini?'
    }
  ]);
  
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isListening, setIsListening] = useState<string | null>(null); // 'id-ID' or 'ar-SA' or null
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scenarios = [
    { type: 'Gratis (Trial)', items: ['Perkenalan', 'Di Restoran', 'Di Sekolah'] },
    { type: 'Premium (SaaS)', items: ['Di Pasar', 'Keluarga', 'Di Bandara', 'Hobi', 'Rumah Sakit', 'Pekerjaan', 'Cuaca & Musim'] }
  ];

  const checkPremiumAccess = (item: string) => scenarios[0].items.includes(item);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, isThinking]);

  const playTTS = (text: string, lang: string) => {
    setIsAiSpeaking(true);
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.onend = () => setIsAiSpeaking(false);
    synth.speak(utterance);
  };

  const getGeminiResponse = async (text: string) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userText: text,
          aiScenario: selectedScenario,
          aiChatHistory: chatHistory,
          aiModel: 'gemini-3.5-flash-lite'
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || 'API Error');
      }

      if (data.candidates && data.candidates[0].content.parts[0].text) {
        const rawText = data.candidates[0].content.parts[0].text.trim();
        const lines = rawText.split('\\n').map((l: string) => l.trim()).filter((l: string) => l.length > 0);
        
        const ar = lines[0] || '';
        const latin = lines[1] || '';
        const id = lines.slice(2).join('\\n') || '';

        setChatHistory(prev => [...prev, {
          sender: 'ai',
          ar: ar,
          latin: latin,
          id: id
        }]);
      }
    } catch (err: any) {
      console.error(err);
      setChatHistory(prev => [...prev, {
        sender: 'ai',
        ar: 'عُذْرًا، حَصَلَ خَطَأٌ فِي الِاتِّصَالِ بِالْخَادِمِ.',
        latin: '[Khatha\'un fii ittishaal]',
        id: 'Gagal memanggil API: ' + (err.message || 'Kesalahan jaringan') + '\\nPastikan API Key sudah diatur di environment.'
      }]);
    } finally {
      setIsThinking(false);
    }
  };

  const startListening = (lang: string) => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Browser Anda tidak mendukung fitur Suara (Gunakan Chrome).");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = lang;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(lang);
    };

    recognition.onerror = (e: any) => {
      console.error("STT Error:", e.error);
      setIsListening(null);
    };

    recognition.onend = () => {
      setIsListening(null);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setChatHistory(prev => [...prev, { sender: 'user', ar: transcript }]);
      setIsListening(null);
      setIsThinking(true);
      getGeminiResponse(transcript);
    };

    recognition.start();
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 text-slate-900 overflow-hidden relative font-sans flex-col">
      <Header />
      
      <div className="flex-1 flex w-full max-w-6xl mx-auto h-full overflow-hidden">
        
        {/* Left column: Avatar and Info */}
        <div className="w-[350px] p-6 flex flex-col items-center bg-white border-r border-slate-200 shadow-sm relative z-10">
          <div className="w-full relative mb-8">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full bg-white border-2 border-slate-200 shadow-sm rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:border-blue-400 transition-colors"
            >
              <span className="truncate">{selectedScenario}</span>
              <ChevronDown size={18} className={`transition-transform text-slate-400 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-slate-800 text-white rounded-2xl shadow-xl overflow-hidden py-2 z-50">
                {scenarios.map((group, idx) => (
                  <div key={idx}>
                    <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
                      {group.type}
                    </div>
                    {group.items.map(item => {
                      const isPremium = !checkPremiumAccess(item);
                      return (
                        <button
                          key={item}
                          onClick={() => { 
                            if(isPremium) { alert('Fitur Premium!'); return; }
                            setSelectedScenario(item); 
                            setIsDropdownOpen(false); 
                          }}
                          className={`w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-slate-700 transition-colors ${selectedScenario === item ? 'bg-slate-700/50 text-blue-400 font-semibold' : 'text-slate-200'}`}
                        >
                          {item}
                          {isPremium && <Lock size={14} className="text-slate-400" />}
                        </button>
                      )
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative w-full aspect-square bg-blue-50 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
            <img src="/ustadz_avatar.png" alt="Tutor" className={`w-full h-full object-cover transition-transform duration-700 ${isAiSpeaking ? 'scale-105' : 'scale-100'}`} onError={(e) => (e.currentTarget.src = 'https://ui-avatars.com/api/?name=Ustadz&background=0D8ABC&color=fff&size=256')} />
          </div>

          <div className="text-center w-full">
            <h2 className="text-xl font-bold text-slate-800">Ustadz Al-Hiwar</h2>
            <p className="text-sm font-medium text-slate-500 mb-4">
              {isAiSpeaking ? 'Sedang berbicara...' : isThinking ? 'Sedang mengetik...' : isListening ? 'Mendengarkan...' : 'Aktif (Idle)'}
            </p>
            
            <button 
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-colors text-sm"
              onClick={() => {
                if(confirm("Hapus riwayat obrolan?")) setChatHistory([]);
              }}
            >
              <Trash2 size={16} /> Hapus Obrolan
            </button>
          </div>
        </div>

        {/* Right column: Chat Area */}
        <div className="flex-1 flex flex-col bg-slate-50/50 relative h-full">
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {chatHistory.map((msg, idx) => {
              const isAi = msg.sender === 'ai';
              return (
                <div key={idx} className={`flex w-full ${isAi ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] ${isAi ? 'items-start' : 'items-end'}`}>
                    <div className={`text-xs font-bold text-slate-400 mb-1 ${!isAi && 'text-right'}`}>
                      {isAi ? 'Ustadz Al-Hiwar' : 'Anda'}
                    </div>
                    <div className={`relative group rounded-3xl p-6 shadow-sm border ${isAi ? 'bg-white border-slate-200 rounded-tl-none' : 'bg-blue-50 border-blue-100 rounded-tr-none'}`}>
                      <p className={`font-serif text-3xl leading-relaxed text-right text-slate-800 ${isAi ? 'mb-4' : ''}`} dir="rtl">
                        {msg.ar}
                      </p>
                      
                      {isAi && (
                        <>
                          <p className="font-medium mb-1 text-slate-600">{msg.latin}</p>
                          <p className="text-sm text-slate-500">{msg.id}</p>
                          <div className="absolute -bottom-4 right-6 flex gap-2">
                            <button
                              title="Dengar (Arab)"
                              onClick={() => playTTS(msg.ar, 'ar-SA')}
                              className="w-10 h-10 bg-white border border-slate-200 shadow-md rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 hover:scale-105 transition-transform"
                            >
                              <Volume2 size={18} />
                            </button>
                            <button
                              title="Dengar (Indo)"
                              onClick={() => playTTS(msg.id || '', 'id-ID')}
                              className="w-10 h-10 bg-slate-100 border border-slate-200 shadow-md rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-50 hover:scale-105 transition-transform font-bold text-[10px]"
                            >
                              ID
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            
            {isThinking && (
              <div className="flex w-full justify-start">
                <div className="max-w-[85%] items-start">
                  <div className="bg-white border border-slate-200 rounded-3xl rounded-tl-none p-6 shadow-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          <div className="p-6 bg-white border-t border-slate-200 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)]">
            <div className="flex gap-4 w-full">
              <button 
                onClick={() => startListening('id-ID')}
                className={`flex-1 flex flex-col items-center justify-center gap-2 py-4 rounded-2xl text-base font-black transition-all ${
                  isListening === 'id-ID' 
                  ? 'bg-red-50 text-red-500 hover:bg-red-100 border border-red-100' 
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm'
                }`}
              >
                <Mic size={24} className={isListening === 'id-ID' ? 'animate-pulse text-red-500' : 'text-red-500'} />
                Bicara (Indo)
              </button>
              
              <button 
                onClick={() => startListening('ar-SA')}
                className={`flex-1 flex flex-col items-center justify-center gap-2 py-4 rounded-2xl text-base font-black transition-all ${
                  isListening === 'ar-SA' 
                  ? 'bg-red-50 text-red-500 hover:bg-red-100 border border-red-100' 
                  : 'bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-500 shadow-sm'
                }`}
              >
                <Mic size={24} className={isListening === 'ar-SA' ? 'animate-pulse text-red-500' : 'text-emerald-600'} />
                Bicara (Arab)
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
