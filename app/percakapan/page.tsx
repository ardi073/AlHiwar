"use client";
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { BookOpen, Lock, CheckCircle2, Volume2, Play } from 'lucide-react';

export default function PercakapanPage() {
  const [themes, setThemes] = useState<any[]>([]);
  const [activeThemeId, setActiveThemeId] = useState<string>('');
  const [completedThemes, setCompletedThemes] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  useEffect(() => {
    const checkData = setInterval(() => {
      if (typeof window !== 'undefined' && (window as any).AL_HIWAR_DATA) {
        const data = (window as any).AL_HIWAR_DATA;
        const themeOrder = data._themeOrder || [];
        const loadedThemes = themeOrder.map((id: string) => data.themes[id]).filter(Boolean);
        setThemes(loadedThemes);
        if (loadedThemes.length > 0) setActiveThemeId(loadedThemes[0].id);
        clearInterval(checkData);
      }
    }, 100);
    return () => clearInterval(checkData);
  }, []);

  const activeTheme = themes.find(t => t.id === activeThemeId);

  const checkPremiumAccess = (id: string) => {
    const freeThemes = ['taaruf', 'matham', 'madrasah'];
    return freeThemes.includes(id); 
  };

  const playAudio = (idx: number, text: string) => {
    setIsPlaying(idx);
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.onend = () => setIsPlaying(null);
    synth.speak(utterance);
  };

  const toggleComplete = () => {
    if (completedThemes.includes(activeThemeId)) {
      setCompletedThemes(completedThemes.filter(id => id !== activeThemeId));
    } else {
      setCompletedThemes([...completedThemes, activeThemeId]);
    }
  };

  if (themes.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  const isCompleted = completedThemes.includes(activeThemeId);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans h-screen overflow-hidden">
      <Header />
      <main className="flex-1 flex overflow-hidden">
        <div className="w-80 bg-white border-r border-slate-200 flex flex-col h-full overflow-hidden shadow-sm z-10">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-slate-800 text-lg">Daftar Tema</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
            {themes.map((theme) => {
              const isActive = theme.id === activeThemeId;
              const isFinished = completedThemes.includes(theme.id);
              const hasAccess = checkPremiumAccess(theme.id);

              return (
                <button
                  key={theme.id}
                  onClick={() => hasAccess ? setActiveThemeId(theme.id) : alert('Fitur Premium!')}
                  className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all ${isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : !hasAccess ? 'bg-slate-50 opacity-60 hover:opacity-100' : 'bg-white hover:bg-slate-50 border border-slate-100'}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-blue-50 text-blue-600'}`}>
                    <BookOpen size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-bold truncate ${isActive ? 'text-white' : 'text-slate-800'}`}>
                      {theme.name}
                    </div>
                    <div className={`text-xs truncate font-serif ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                      {theme.arabic}
                    </div>
                  </div>
                  {isFinished && <CheckCircle2 size={18} className={isActive ? 'text-blue-200' : 'text-emerald-500'} />}
                  {!hasAccess && <Lock size={16} className="text-slate-400" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 flex flex-col h-full bg-slate-50/50 relative overflow-hidden">
          {activeTheme && (
            <>
              <div className="p-6 bg-white border-b border-slate-200 flex items-center justify-between shadow-sm z-10">
                <div>
                  <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3">
                    {activeTheme.name}
                    <span className="text-orange-400 font-serif font-normal">{activeTheme.arabic}</span>
                  </h2>
                  <p className="text-slate-500 text-sm mt-1">Pelajari dialog sehari-hari di bawah ini</p>
                </div>
                <button
                  onClick={toggleComplete}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${isCompleted ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                  <CheckCircle2 size={18} />
                  {isCompleted ? 'Selesai' : 'Tandai Selesai'}
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar scroll-smooth">
                {activeTheme.dialogue.map((line: any, idx: number) => {
                  const isLeft = line.side === 'left';
                  return (
                    <div key={idx} className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
                      <div className={`max-w-[75%] ${isLeft ? 'items-start' : 'items-end'}`}>
                        <div className={`text-xs font-bold text-slate-400 mb-1 ${!isLeft && 'text-right'}`}>
                          {line.char}
                        </div>
                        <div className={`relative group rounded-2xl p-5 shadow-sm border ${isLeft ? 'bg-white border-slate-200 rounded-tl-none' : 'bg-blue-50 border-blue-100 rounded-tr-none'}`}>
                          <p className="font-serif text-2xl text-right leading-relaxed mb-3 text-slate-800" dir="rtl">
                            {line.ar}
                          </p>
                          <p className="text-slate-600 font-medium mb-1">{line.latin}</p>
                          <p className="text-slate-500 text-sm">{line.id}</p>
                          <button
                            onClick={() => playAudio(idx, line.ar)}
                            className={`absolute -bottom-3 ${isLeft ? '-right-3' : '-left-3'} w-10 h-10 bg-white border border-slate-200 shadow-md rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all opacity-0 group-hover:opacity-100`}
                          >
                            {isPlaying === idx ? <Volume2 size={18} className="animate-pulse" /> : <Play size={18} className="ml-1" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3 bg-white border-t border-slate-200 text-center">
                <span className="text-xs font-semibold text-slate-500">Tip: Ketuk tombol speaker untuk mendengar pelafalan.</span>
              </div>
            </>
          )}
        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background-color: #94a3b8; }
      `}} />
    </div>
  );
}
