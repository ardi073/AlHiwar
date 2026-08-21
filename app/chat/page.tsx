"use client";
import { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import { useAudioChat } from '@/lib/audio/useAudioChat';
import { ChevronDown, Trash2, Mic, Play, Volume2, Lock } from 'lucide-react';

export default function ChatPage() {
  const { status, volume, feedbacks, startSession, stopSession } = useAudioChat();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState('Perkenalan');
  
  // Local mock state for chat history since useAudioChat gives feedbacks, 
  // but we want a chat-like interface.
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'ai',
      ar: 'السَّلَامُ عَلَيْكُمْ! أَنَا أُسْتَاذُ الْحِوَار. كَيْفَ حَالُكَ الْيَوْمَ؟',
      latin: 'As-salaamu \'alaikum! Ana ustadzul hiwaar. Kaifa haaluka al-yaum?',
      id: 'Semoga keselamatan tercurah untukmu! Saya Ustadz Al-Hiwar. Bagaimana kabarmu hari ini?'
    }
  ]);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);

  const scenarios = [
    { type: 'Gratis (Trial)', items: ['Perkenalan', 'Di Restoran', 'Di Sekolah'] },
    { type: 'Premium (SaaS)', items: ['Di Pasar', 'Keluarga', 'Di Bandara', 'Hobi', 'Rumah Sakit', 'Pekerjaan', 'Cuaca & Musim'] }
  ];

  const checkPremiumAccess = (item: string) => {
    return scenarios[0].items.includes(item);
  };

  const playArabic = (text: string) => {
    setIsAiSpeaking(true);
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.onend = () => setIsAiSpeaking(false);
    synth.speak(utterance);
  };

  const playIndo = (text: string) => {
    setIsAiSpeaking(true);
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.onend = () => setIsAiSpeaking(false);
    synth.speak(utterance);
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 text-slate-900 overflow-hidden relative font-sans flex-col">
      <Header />
      
      <div className="flex-1 flex w-full max-w-6xl mx-auto h-full overflow-hidden">
        
        {/* Left column: Avatar and Info */}
        <div className="w-[350px] p-6 flex flex-col items-center bg-white border-r border-slate-200 shadow-sm relative z-10">
          
          {/* Dropdown */}
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

          {/* Avatar Image */}
          <div className="relative w-full aspect-square bg-blue-50 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
            {/* Fallback to simple icon since we can't reliably load the user's local image right now, we will add an img tag */}
            <img src="/ustadz_avatar.png" alt="Tutor" className={`w-full h-full object-cover transition-transform duration-700 ${isAiSpeaking ? 'scale-105' : 'scale-100'}`} onError={(e) => (e.currentTarget.src = 'https://ui-avatars.com/api/?name=Ustadz&background=0D8ABC&color=fff&size=256')} />
          </div>

          <div className="text-center w-full">
            <h2 className="text-xl font-bold text-slate-800">Ustadz Al-Hiwar</h2>
            <p className="text-sm font-medium text-slate-500 mb-4">{isAiSpeaking ? 'Sedang berbicara...' : status === 'Live' ? 'Mendengarkan...' : 'Aktif (Idle)'}</p>
            
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
                    <div className={`relative group rounded-3xl p-6 shadow-sm border ${isAi ? 'bg-white border-slate-200 rounded-tl-none' : 'bg-blue-600 border-blue-700 rounded-tr-none text-white'}`}>
                      <p className={`font-serif text-3xl leading-relaxed mb-4 text-right ${isAi ? 'text-slate-800' : 'text-white'}`} dir="rtl">
                        {msg.ar}
                      </p>
                      <p className={`font-medium mb-1 ${isAi ? 'text-slate-600' : 'text-blue-100'}`}>{msg.latin}</p>
                      <p className={`text-sm ${isAi ? 'text-slate-500' : 'text-blue-200'}`}>{msg.id}</p>
                      
                      {isAi && (
                        <div className="absolute -bottom-4 right-6 flex gap-2">
                          <button
                            title="Dengar (Arab)"
                            onClick={() => playArabic(msg.ar)}
                            className="w-10 h-10 bg-white border border-slate-200 shadow-md rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 hover:scale-105 transition-transform"
                          >
                            <Volume2 size={18} />
                          </button>
                          <button
                            title="Dengar (Indo)"
                            onClick={() => playIndo(msg.id)}
                            className="w-10 h-10 bg-slate-100 border border-slate-200 shadow-md rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-50 hover:scale-105 transition-transform font-bold text-[10px]"
                          >
                            ID
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            {feedbacks.length > 0 && feedbacks.map(fb => (
              <div key={fb.id} className="flex w-full justify-end">
                <div className="max-w-[85%] items-end">
                  <div className="bg-blue-50 border border-blue-100 rounded-3xl p-4 shadow-sm text-right">
                    <p className="text-slate-800 text-sm">Anda (Suara):</p>
                    <p className="font-serif text-xl mt-2">{fb.originalText}</p>
                    {fb.correctedText && (
                      <div className="mt-3 p-3 bg-emerald-50 rounded-xl text-left border border-emerald-100">
                        <p className="text-xs font-bold text-emerald-600">Koreksi Tutor:</p>
                        <p className="font-serif text-lg text-emerald-900 mt-1" dir="rtl">{fb.correctedText}</p>
                        <p className="text-sm text-emerald-700 mt-1">{fb.explanation}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white border-t border-slate-200 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)]">
            <button 
              onClick={status === 'Live' ? stopSession : startSession}
              className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl text-lg font-black transition-all ${
                status === 'Live' 
                ? 'bg-red-50 text-red-500 hover:bg-red-100 border border-red-100' 
                : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-100 shadow-lg shadow-emerald-600/20'
              }`}
            >
              <Mic size={24} className={status === 'Live' ? 'animate-pulse' : ''} />
              {status === 'Live' ? 'Berhenti Bicara' : 'Bicara (Arab)'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
