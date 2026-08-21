"use client";
import { Mic, Keyboard, Zap, Sparkles } from 'lucide-react';

interface ActionBarProps {
  status: string;
  onToggleMic: () => void;
}

export default function ActionBar({ status, onToggleMic }: ActionBarProps) {
  const isLive = status === 'Live';
  const isConnecting = status === 'Connecting';

  return (
    <footer className="absolute bottom-0 w-full px-4 sm:px-6 py-6 pb-8 bg-gradient-to-t from-slate-50 via-slate-50/95 to-transparent z-30 pointer-events-none">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between relative gap-6 md:gap-0 pointer-events-auto">
        
        {/* Status Indicator */}
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-slate-200/80 w-auto md:flex-1 md:max-w-[200px]">
          {isLive ? (
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            </div>
          ) : isConnecting ? (
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
            </div>
          ) : (
            <div className="relative flex h-3 w-3">
              <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-400/50"></span>
            </div>
          )}
          <span className="text-sm font-bold text-slate-700 tracking-wide">
            {status === 'Disconnected' ? 'Tap to start' : status === 'Connecting' ? 'Connecting...' : 'Listening...'}
          </span>
        </div>

        {/* Big Mic Button */}
        <div className="flex-shrink-0 relative z-40 order-first md:order-none">
          <button 
            onClick={onToggleMic}
            className={`group relative flex items-center justify-center w-24 h-24 text-white rounded-full transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95 ${isLive ? 'bg-red-500 hover:bg-red-600 shadow-red-500/30' : 'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 shadow-blue-500/30'}`}
          >
            {/* Ambient shadow ring */}
            <div className={`absolute inset-[-8px] rounded-full opacity-50 blur-lg transition-all duration-500 -z-10 ${isLive ? 'bg-red-500' : 'bg-blue-400'}`} />
            
            {/* Outer animated rings */}
            {isLive ? (
               <div className="absolute inset-0 rounded-full border-[6px] border-red-300/30 opacity-0 group-hover:animate-ping group-hover:opacity-100" />
            ) : (
               <div className="absolute inset-0 rounded-full border-[6px] border-blue-200/30 opacity-0 group-hover:animate-ping group-hover:opacity-100" />
            )}
            
            <Mic size={38} className={`relative z-10 transition-transform duration-300 ${isLive ? 'scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'drop-shadow-md'}`} />
          </button>
        </div>

        {/* Extra Actions */}
        <div className="w-auto md:flex-1 md:max-w-[200px] flex justify-center md:justify-end gap-3">
          <button className="flex items-center justify-center w-12 h-12 text-slate-500 hover:text-blue-600 bg-white/80 hover:bg-white rounded-2xl transition-all duration-300 shadow-sm border border-slate-200/80 hover:-translate-y-1 hover:shadow-md">
            <Keyboard size={22} strokeWidth={2} />
          </button>
          <button className="flex items-center justify-center w-12 h-12 text-slate-500 hover:text-orange-500 bg-white/80 hover:bg-white rounded-2xl transition-all duration-300 shadow-sm border border-slate-200/80 hover:-translate-y-1 hover:shadow-md">
            <Sparkles size={22} strokeWidth={2} />
          </button>
        </div>

      </div>
    </footer>
  );
}

