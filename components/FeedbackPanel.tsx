import { CheckCircle, AlertCircle, X, ChevronRight, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import type { FeedbackData } from '@/lib/audio/useAudioChat';

interface FeedbackPanelProps {
  feedbacks?: FeedbackData[];
}

export default function FeedbackPanel({ feedbacks = [] }: FeedbackPanelProps) {
  return (
    <aside className="w-80 lg:w-96 hidden md:flex flex-col border-l border-blue-100 bg-white dark:bg-slate-900 shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.1)] z-20">
      <div className="p-6 border-b border-blue-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-100 rounded-lg text-blue-600">
            <Sparkles size={18} />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg">AI Feedback</h3>
        </div>
        <button className="text-slate-400 hover:text-slate-700 dark:text-slate-300 transition-all hover:rotate-90 bg-slate-50 dark:bg-slate-950 p-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
          <X size={16} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col-reverse custom-scrollbar">
        {feedbacks.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 opacity-70 mt-10">
            <MessageSquare size={48} strokeWidth={1} className="mb-4" />
            <p className="text-sm font-medium">Start speaking in Arabic.<br/>I will provide live feedback here.</p>
          </div>
        )}
        
        {feedbacks.map((item) => (
          item.isError ? (
            <div key={item.id} className="animate-in slide-in-from-right-5 fade-in duration-500 bg-white dark:bg-slate-900 border border-orange-100 rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-50 pointer-events-none" />
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="bg-gradient-to-br from-orange-400 to-red-500 p-2.5 rounded-2xl shadow-lg shadow-orange-500/20 shrink-0 text-white">
                  <AlertCircle size={20} strokeWidth={2.5} />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-extrabold text-slate-800 dark:text-slate-200">Grammar Tip</p>
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">{item.CEFR_Level}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{item.explanation}</p>
                  
                  <div className="space-y-3 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">You said:</p>
                      <p className="line-through text-slate-500 dark:text-slate-400 decoration-red-400/50 decoration-2 text-sm font-medium">{item.originalText}</p>
                    </div>
                    <div className="h-px w-full bg-slate-200" />
                    <div>
                      <p className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-1">Better:</p>
                      <div className="flex items-start gap-2 text-blue-700 font-semibold text-sm">
                        <p>{item.correctedText}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div key={item.id} className="animate-in slide-in-from-right-5 fade-in duration-500 bg-white dark:bg-slate-900 border border-blue-100 rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-50 pointer-events-none" />
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-2.5 rounded-2xl shadow-lg shadow-blue-500/20 shrink-0 text-white">
                  <ShieldCheck size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-800 dark:text-slate-200 mb-1">Perfect!</p>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">{item.explanation}</p>
                  <div className="bg-slate-50 dark:bg-slate-950 px-3 py-2 rounded-xl border border-slate-100 dark:border-slate-800 inline-block">
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">"{item.originalText}"</p>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(148, 163, 184, 0.3);
          border-radius: 10px;
        }
      `}} />
    </aside>
  );
}
