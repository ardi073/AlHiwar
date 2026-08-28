"use client";
import Avatar3D from './Avatar';

interface MainDisplayProps {
  volume?: number;
  status?: string;
}

export default function MainDisplay({ volume = 0, status = 'Disconnected' }: MainDisplayProps) {
  const isLive = status === 'Live';
  
  // Enhanced dynamic scale based on volume
  const scale = isLive ? 1 + (volume / 255) * 0.15 : 1;
  const glowOpacity = isLive ? 0.4 + (volume / 255) * 0.6 : 0;
  
  return (
    <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-100 blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-200/50 blur-[100px] mix-blend-multiply" />
      </div>
      
      {/* 3D Avatar Area */}
      <div className="relative flex flex-col items-center justify-center z-10 w-full max-w-md mx-auto mt-16 mb-24">
        
        {/* Dynamic Voice Glow behind avatar */}
        <div 
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-75 pointer-events-none"
           style={{ 
             width: '120%',
             height: '120%',
             transform: `translate(-50%, -50%) scale(${scale})`, 
             backgroundColor: `rgba(59, 130, 246, ${glowOpacity})`, // blue-500
             filter: 'blur(40px)',
           }} 
        />
        
        {/* Avatar container */}
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-[0_20px_50px_-12px_rgba(37,99,235,0.25)] bg-gradient-to-b from-white to-blue-50 overflow-hidden relative backdrop-blur-sm pointer-events-auto border-4 border-white">
          <Avatar3D volume={volume} />
          
          {/* Status dot overlay */}
          <div className="absolute inset-0 shadow-inner rounded-full pointer-events-none" />
        </div>
        
        <div className={`mt-8 px-4 py-1.5 rounded-full backdrop-blur-md border border-white shadow-sm transition-colors flex items-center gap-2 ${isLive ? 'bg-blue-50 dark:bg-blue-950 text-blue-700' : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400'}`}>
           <span className="relative flex h-2 w-2">
             {isLive && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>}
             <span className={`relative inline-flex rounded-full h-2 w-2 ${isLive ? 'bg-blue-50 dark:bg-blue-9500' : 'bg-slate-400'}`}></span>
           </span>
           <span className="text-xs font-bold uppercase tracking-wider">{isLive ? 'Listening...' : 'Ready to talk'}</span>
        </div>

        {/* AI Greeting Text */}
        <div className="text-center space-y-3 mt-6 max-w-sm px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            مرحباً بك!
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
            Let's practice your Arabic conversation today.
          </p>
        </div>
      </div>
    </main>
  );
}
