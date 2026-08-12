"use client";
import { Mic, Keyboard, Zap } from 'lucide-react';

interface ActionBarProps {
  status: string;
  onToggleMic: () => void;
}

export default function ActionBar({ status, onToggleMic }: ActionBarProps) {
  const isLive = status === 'Live';
  const isConnecting = status === 'Connecting';

  return (
    <footer className="px-6 py-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.05)] z-20">
      <div className="max-w-4xl mx-auto flex items-center justify-between relative">
        
        {/* Status Indicator */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 dark:bg-slate-700/80 shadow-inner flex-1 max-w-[160px]">
          {isLive ? (
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </div>
          ) : isConnecting ? (
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
            </div>
          ) : (
            <div className="relative flex h-2.5 w-2.5">
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-400"></span>
            </div>
          )}
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide">{status === 'Disconnected' ? 'Disconnected' : status === 'Connecting' ? 'Connecting...' : 'Live Session'}</span>
        </div>

        {/* Big Mic Button */}
        <div className="flex-shrink-0 -mt-10 relative z-30">
          <button 
            onClick={onToggleMic}
            className={`group relative flex items-center justify-center w-20 h-20 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border-4 border-slate-50 dark:border-slate-900 ${isLive ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-to-tr from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400'}`}
          >
            {/* Outer rings animation */}
            {isLive ? (
               <div className="absolute inset-0 rounded-full border-4 border-red-400/30 opacity-0 group-hover:animate-ping group-hover:opacity-100" />
            ) : (
               <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 opacity-0 group-hover:animate-ping group-hover:opacity-100" />
            )}
            
            <Mic size={32} className="relative z-10 drop-shadow-md" />
          </button>
        </div>

        {/* Extra Actions */}
        <div className="flex-1 max-w-[160px] flex justify-end gap-2">
          <button className="p-3 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-all duration-200 shadow-sm">
            <Keyboard size={20} />
          </button>
          <button className="p-3 text-slate-500 hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/30 rounded-full transition-all duration-200 shadow-sm">
            <Zap size={20} />
          </button>
        </div>

      </div>
    </footer>
  );
}
