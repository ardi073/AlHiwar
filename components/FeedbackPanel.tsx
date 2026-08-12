import { CheckCircle, AlertCircle, X, ChevronRight } from 'lucide-react';
import type { FeedbackData } from '@/lib/audio/useAudioChat';

interface FeedbackPanelProps {
  feedbacks?: FeedbackData[];
}

export default function FeedbackPanel({ feedbacks = [] }: FeedbackPanelProps) {
  return (
    <aside className="w-80 lg:w-96 hidden md:flex flex-col border-l border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl shadow-2xl z-10 transition-transform duration-300">
      <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between bg-white/80 dark:bg-slate-800/80">
        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">Live Feedback</h3>
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors bg-slate-100 dark:bg-slate-700 p-1.5 rounded-full">
          <X size={20} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-5 space-y-5 flex flex-col-reverse">
        {feedbacks.length === 0 && (
          <div className="text-center text-slate-400 dark:text-slate-500 mt-10">
            <p className="text-sm">Start speaking to get live feedback on your grammar and pronunciation.</p>
          </div>
        )}
        
        {feedbacks.map((item) => (
          item.isError ? (
            <div key={item.id} className="animate-in slide-in-from-right-5 fade-in duration-300 bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/10 border border-orange-200 dark:border-orange-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full shrink-0">
                  <AlertCircle size={20} className="text-orange-600 dark:text-orange-400" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-orange-800 dark:text-orange-300">Grammar tip</p>
                    <span className="text-[10px] bg-orange-200/50 dark:bg-orange-800/50 text-orange-800 dark:text-orange-200 px-2 py-0.5 rounded-full font-bold">{item.CEFR_Level}</span>
                  </div>
                  <p className="text-xs text-orange-700/80 dark:text-orange-400/80 mt-1">{item.explanation}</p>
                  <div className="text-sm mt-3 space-y-2 bg-white/50 dark:bg-black/20 p-3 rounded-xl w-full">
                    <p className="line-through text-slate-500 decoration-red-400/50">{item.originalText}</p>
                    <div className="flex items-center gap-2 text-orange-700 dark:text-orange-300 font-semibold bg-orange-100/50 dark:bg-orange-900/30 p-2 rounded-lg">
                      <ChevronRight size={16} />
                      <p>{item.correctedText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div key={item.id} className="animate-in slide-in-from-right-5 fade-in duration-300 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/10 border border-green-200 dark:border-green-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full shrink-0">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-300">{item.explanation}</p>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-400 mt-1.5 bg-white/50 dark:bg-black/20 p-2 rounded-lg font-medium inline-block">"{item.originalText}"</p>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </aside>
  );
}
