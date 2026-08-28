"use client";
import { useEffect, useState } from 'react';
import { Volume2, Star, ChevronLeft, ChevronRight, Lock } from 'lucide-react';

export default function KosakataTab({ isPremium = false }: { isPremium?: boolean }) {
  const [themes, setThemes] = useState<any[]>([]);
  const [activeThemeId, setActiveThemeId] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

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
  const vocabList = activeTheme ? activeTheme.vocabulary : [];
  const currentVocab = vocabList[currentIndex];

  const checkPremiumAccess = (id: string) => {
    const freeThemes = ['taaruf', 'matham', 'madrasah'];
    return freeThemes.includes(id); 
  };

  const handleThemeChange = (id: string) => {
    if (!checkPremiumAccess(id)) {
      alert('Fitur Premium!');
      return;
    }
    setActiveThemeId(id);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const playAudio = (e: any, text: string) => {
    e.stopPropagation();
    setIsPlaying(true);
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.onend = () => setIsPlaying(false);
    synth.speak(utterance);
  };

  const toggleFavorite = (e: any, ar: string) => {
    e.stopPropagation();
    if (favorites.includes(ar)) {
      setFavorites(favorites.filter(x => x !== ar));
    } else {
      setFavorites([...favorites, ar]);
    }
  };

  if (themes.length === 0) {
    return (
      <div className="flex-1 flex flex-col w-full h-full relative overflow-hidden"><div className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col w-full h-full relative overflow-hidden"><main className="flex-1 flex flex-col items-center p-8 overflow-y-auto w-full max-w-4xl mx-auto">
        
        {/* Theme Selector Dropdown */}
        <div className="w-full max-w-md mb-8">
          <label className="block text-sm font-bold text-slate-500 mb-2">Pilih Tema Belajar:</label>
          <div className="relative">
            <select 
              value={activeThemeId}
              onChange={(e) => handleThemeChange(e.target.value)}
              className="w-full appearance-none bg-white border-2 border-slate-200 text-slate-800 font-bold py-3 px-4 pr-8 rounded-xl focus:outline-none focus:border-blue-500 shadow-sm"
            >
              {themes.map(t => (
                <option key={t.id} value={t.id}>
                  {t.name} {!checkPremiumAccess(t.id) ? '(Premium)' : ''}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        {/* Flashcard */}
        {currentVocab && (
          <div 
            className="w-full max-w-md aspect-[4/3] perspective-1000 mb-8 cursor-pointer relative"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className={`w-full h-full relative transition-transform duration-500 transform-style-3d shadow-xl rounded-3xl ${isFlipped ? 'rotate-y-180' : ''}`}>
              
              {/* Front Face (Arabic) */}
              <div className="absolute w-full h-full bg-white border border-slate-200 rounded-3xl backface-hidden flex flex-col items-center justify-center p-8 z-20">
                <span className="absolute top-6 text-sm font-bold text-blue-400 tracking-wide uppercase">Bahasa Arab</span>
                
                <h2 className="text-5xl md:text-6xl font-serif text-slate-800 mb-8 leading-tight text-center" dir="rtl">
                  {currentVocab.ar}
                </h2>
                
                <div className="absolute bottom-6 flex gap-4">
                  <button 
                    onClick={(e) => playAudio(e, currentVocab.ar)}
                    className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors shadow-sm"
                  >
                    <Volume2 size={24} className={isPlaying ? 'animate-pulse' : ''} />
                  </button>
                  <button 
                    onClick={(e) => toggleFavorite(e, currentVocab.ar)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-sm ${favorites.includes(currentVocab.ar) ? 'bg-orange-100 text-orange-500' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                  >
                    <Star size={24} className={favorites.includes(currentVocab.ar) ? 'fill-current' : ''} />
                  </button>
                </div>
              </div>

              {/* Back Face (Indonesian) */}
              <div className="absolute w-full h-full bg-blue-600 border border-blue-700 rounded-3xl backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 text-white">
                <span className="absolute top-6 text-sm font-bold text-blue-200 tracking-wide uppercase">Arti & Pelafalan</span>
                
                <h3 className="text-3xl font-black text-center mb-4 leading-tight">{currentVocab.id}</h3>
                <p className="text-xl font-medium text-blue-200 text-center italic">"{currentVocab.latin}"</p>
                
                <span className="absolute bottom-6 text-xs text-blue-300">Ketuk untuk membalik</span>
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        {vocabList.length > 0 && (
          <div className="w-full max-w-md flex items-center justify-between px-4">
            <button 
              onClick={() => { setCurrentIndex(Math.max(0, currentIndex - 1)); setIsFlipped(false); }}
              disabled={currentIndex === 0}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${currentIndex === 0 ? 'bg-slate-100 text-slate-300' : 'bg-white text-blue-600 shadow-md hover:-translate-x-1'}`}
            >
              <ChevronLeft size={28} />
            </button>
            
            <div className="text-lg font-black text-slate-400">
              <span className="text-blue-600 text-2xl">{currentIndex + 1}</span> / {vocabList.length}
            </div>
            
            <button 
              onClick={() => { setCurrentIndex(Math.max(0, currentIndex + 1)); setIsFlipped(false); }}
              disabled={currentIndex === vocabList.length - 1}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${currentIndex === vocabList.length - 1 ? 'bg-slate-100 text-slate-300' : 'bg-white text-blue-600 shadow-md hover:translate-x-1'}`}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}

      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </div>
  );
}
