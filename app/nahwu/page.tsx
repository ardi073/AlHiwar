"use client";
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { Book, Lock, CheckCircle2, Info, Table, CheckSquare } from 'lucide-react';

export default function NahwuPage() {
  const [chapters, setChapters] = useState<any[]>([]);
  const [activeChapterId, setActiveChapterId] = useState<string>('');
  const [completedChapters, setCompletedChapters] = useState<string[]>([]);

  useEffect(() => {
    const checkData = setInterval(() => {
      if (typeof window !== 'undefined' && (window as any).AL_HIWAR_DATA) {
        const data = (window as any).AL_HIWAR_DATA;
        if (data.nahwu && data.nahwu.chapters) {
          setChapters(data.nahwu.chapters);
          if (data.nahwu.chapters.length > 0) setActiveChapterId(data.nahwu.chapters[0].id);
        }
        clearInterval(checkData);
      }
    }, 100);
    return () => clearInterval(checkData);
  }, []);

  const activeChapter = chapters.find(c => c.id === activeChapterId);

  const checkPremiumAccess = (idx: number) => {
    return idx < 2; // First 2 chapters are free
  };

  const toggleComplete = () => {
    if (completedChapters.includes(activeChapterId)) {
      setCompletedChapters(completedChapters.filter(id => id !== activeChapterId));
    } else {
      setCompletedChapters([...completedChapters, activeChapterId]);
    }
  };

  if (chapters.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 font-medium">Memuat modul Nahwu Shorof...</p>
        </div>
      </div>
    );
  }

  const isCompleted = completedChapters.includes(activeChapterId);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans h-screen overflow-hidden">
      <Header />
      
      <main className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-80 bg-white border-r border-slate-200 flex flex-col h-full overflow-hidden shadow-sm z-10">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
              <Book size={20} className="text-blue-600" />
              Modul Nahwu Shorof
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
            {chapters.map((chap, idx) => {
              const isActive = chap.id === activeChapterId;
              const isFinished = completedChapters.includes(chap.id);
              const hasAccess = checkPremiumAccess(idx);

              return (
                <button
                  key={chap.id}
                  onClick={() => hasAccess ? setActiveChapterId(chap.id) : alert('Fitur Premium!')}
                  className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all ${isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : !hasAccess ? 'bg-slate-50 opacity-60 hover:opacity-100' : 'bg-white hover:bg-slate-50 border border-slate-100'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${isActive ? 'bg-white/20' : 'bg-blue-50 text-blue-600'}`}>
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-bold truncate text-sm ${isActive ? 'text-white' : 'text-slate-800'}`}>
                      {chap.title}
                    </div>
                  </div>
                  {isFinished && <CheckCircle2 size={16} className={isActive ? 'text-blue-200' : 'text-emerald-500'} />}
                  {!hasAccess && <Lock size={14} className="text-slate-400" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Main Panel */}
        <div className="flex-1 flex flex-col h-full bg-slate-50 relative overflow-hidden">
          {activeChapter && (
            <>
              {/* Header */}
              <div className="p-6 bg-white border-b border-slate-200 flex items-center justify-between shadow-sm z-10">
                <div>
                  <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3">
                    {activeChapter.title}
                    {activeChapter.titleAr && <span className="text-orange-400 font-serif font-normal">{activeChapter.titleAr}</span>}
                  </h2>
                  <p className="text-slate-500 text-sm mt-1">Pelajari kaidah tata bahasa Arab</p>
                </div>
                <button
                  onClick={toggleComplete}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${isCompleted ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                  <CheckCircle2 size={18} />
                  {isCompleted ? 'Selesai' : 'Tandai Selesai'}
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar scroll-smooth w-full max-w-4xl mx-auto">
                
                {/* Explanation */}
                {activeChapter.explanation && (
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-blue-600 mb-4 flex items-center gap-2">
                      <Info size={18} /> Penjelasan
                    </h3>
                    <div className="text-slate-700 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: activeChapter.explanation.replace(/\n/g, '<br>') }} />
                  </div>
                )}

                {/* Table */}
                {activeChapter.table && activeChapter.table.headers && activeChapter.table.rows && (
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 overflow-x-auto">
                    <h3 className="font-bold text-orange-500 mb-4 flex items-center gap-2">
                      <Table size={18} /> Tabel Tashrif / I'rab
                    </h3>
                    <table className="w-full text-right" dir="rtl">
                      <thead>
                        <tr className="bg-slate-50 border-b-2 border-slate-200">
                          {activeChapter.table.headers.map((h: string, i: number) => (
                            <th key={i} className="p-3 font-bold text-slate-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {activeChapter.table.rows.map((row: string[], i: number) => (
                          <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                            {row.map((cell: string, j: number) => (
                              <td key={j} className="p-3 font-serif text-lg text-slate-800">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Examples */}
                {activeChapter.examples && activeChapter.examples.length > 0 && (
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-emerald-600 mb-4 flex items-center gap-2">
                      <CheckSquare size={18} /> Contoh Kalimat
                    </h3>
                    <div className="space-y-4">
                      {activeChapter.examples.map((ex: any, i: number) => (
                        <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                          <p className="font-serif text-2xl mb-2 text-slate-800 text-right" dir="rtl">{ex.ar}</p>
                          <p className="text-sm font-medium text-slate-500 mb-1">{ex.latin}</p>
                          <p className="text-sm text-slate-700 mb-2">{ex.id}</p>
                          {ex.highlight && (
                            <p className="text-xs font-bold text-blue-600 italic mt-2 pt-2 border-t border-slate-200 flex items-center gap-1">
                              <Info size={12} /> {ex.highlight}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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
