"use client";
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { Trophy, ArrowRight, RotateCcw, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function KuisPage() {
  const [themes, setThemes] = useState<any[]>([]);
  const [activeThemeId, setActiveThemeId] = useState<string>('');
  
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

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
  const quizList = activeTheme ? activeTheme.quiz : [];
  const currentQ = quizList[currentQuestionIdx];

  const checkPremiumAccess = (id: string) => {
    const freeThemes = ['taaruf', 'matham', 'madrasah'];
    return freeThemes.includes(id); 
  };

  const startQuiz = (id: string) => {
    if (!checkPremiumAccess(id)) {
      alert('Fitur Premium!');
      return;
    }
    setActiveThemeId(id);
    setCurrentQuestionIdx(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOption(null);
    setIsAnswerChecked(false);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked) return;
    setSelectedOption(idx);
  };

  const checkAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerChecked(true);
    if (selectedOption === currentQ.correct) {
      setScore(score + 10);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIdx < quizList.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      setIsFinished(true);
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

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans h-screen overflow-hidden">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6 overflow-y-auto w-full max-w-3xl mx-auto">
        
        {/* Theme Selector */}
        {!isFinished && currentQuestionIdx === 0 && !isAnswerChecked && (
          <div className="w-full mb-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-black text-slate-800 mb-4 text-center">Pilih Tema Kuis</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {themes.map(t => {
                const hasAccess = checkPremiumAccess(t.id);
                return (
                  <button
                    key={t.id}
                    onClick={() => startQuiz(t.id)}
                    className={`p-3 rounded-xl border-2 text-sm font-bold transition-all ${activeThemeId === t.id ? 'border-blue-600 bg-blue-50 text-blue-700' : hasAccess ? 'border-slate-200 hover:border-blue-300 text-slate-600' : 'border-slate-100 bg-slate-50 text-slate-400 opacity-60'}`}
                  >
                    {t.name}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {isFinished ? (
          <div className="w-full bg-white p-10 rounded-3xl shadow-sm border border-slate-200 text-center flex flex-col items-center animate-in zoom-in-95 duration-500 mt-10">
            <div className="w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center mb-6">
              <Trophy size={48} />
            </div>
            <h2 className="text-3xl font-black text-slate-800 mb-2">Skor Anda</h2>
            <div className="text-7xl font-black text-blue-600 mb-6">{score}</div>
            <p className="text-slate-500 mb-8 font-medium">Luar biasa! Anda telah menyelesaikan kuis tema <span className="font-bold text-slate-700">{activeTheme?.name}</span>.</p>
            <button 
              onClick={() => startQuiz(activeThemeId)}
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-md hover:bg-blue-700 transition-colors"
            >
              <RotateCcw size={20} /> Coba Lagi
            </button>
          </div>
        ) : (
          currentQ && (
            <div className="w-full flex flex-col">
              {/* Progress Bar */}
              <div className="w-full mb-8">
                <div className="flex justify-between text-sm font-bold text-slate-500 mb-2">
                  <span>Pertanyaan {currentQuestionIdx + 1} dari {quizList.length}</span>
                  <span className="text-blue-600">Skor: {score}</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full transition-all duration-500" style={{ width: `${((currentQuestionIdx + 1) / quizList.length) * 100}%` }}></div>
                </div>
              </div>

              {/* Question Card */}
              <div className="w-full bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 text-center leading-relaxed">
                  {currentQ.q}
                </h2>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {currentQ.options.map((opt: string, idx: number) => {
                  let btnClass = "border-2 border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50";
                  let icon = null;

                  if (isAnswerChecked) {
                    if (idx === currentQ.correct) {
                      btnClass = "border-2 border-emerald-500 bg-emerald-50 text-emerald-700";
                      icon = <CheckCircle2 size={20} className="text-emerald-500" />;
                    } else if (idx === selectedOption) {
                      btnClass = "border-2 border-red-500 bg-red-50 text-red-700";
                      icon = <AlertCircle size={20} className="text-red-500" />;
                    } else {
                      btnClass = "border-2 border-slate-100 bg-slate-50 text-slate-400 opacity-60";
                    }
                  } else if (selectedOption === idx) {
                    btnClass = "border-2 border-blue-600 bg-blue-50 text-blue-700";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerChecked}
                      className={`relative p-5 rounded-2xl text-lg font-bold text-left transition-all ${btnClass}`}
                    >
                      {opt}
                      <span className="absolute right-5 top-1/2 -translate-y-1/2">
                        {icon}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="flex justify-end">
                {!isAnswerChecked ? (
                  <button 
                    onClick={checkAnswer}
                    disabled={selectedOption === null}
                    className={`px-8 py-4 rounded-2xl font-bold text-white transition-all shadow-md ${selectedOption !== null ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-300'}`}
                  >
                    Periksa Jawaban
                  </button>
                ) : (
                  <button 
                    onClick={nextQuestion}
                    className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md"
                  >
                    Lanjut <ArrowRight size={20} />
                  </button>
                )}
              </div>
            </div>
          )
        )}
      </main>
    </div>
  );
}
