"use client";
import Avatar3D from './Avatar';

interface MainDisplayProps {
  volume?: number;
  status?: string;
}

export default function MainDisplay({ volume = 0, status = 'Disconnected' }: MainDisplayProps) {
  // Normalize volume for scale (0 to 255 typically for byte frequency data)
  const isLive = status === 'Live';
  const scale = isLive ? 1 + (volume / 255) * 0.3 : 1;
  const opacity = isLive ? 0.3 + (volume / 255) * 0.7 : 0.2;

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-transparent dark:from-blue-900/20 dark:to-transparent pointer-events-none -z-10" />
      
      {/* 3D Avatar Area */}
      <div className="w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center mb-6">
        {/* Glow effect behind avatar */}
        <div 
           className="absolute inset-0 rounded-full blur-2xl transition-all duration-75 pointer-events-none"
           style={{ 
             transform: `scale(${scale})`, 
             backgroundColor: `rgba(59, 130, 246, ${opacity})`
           }} 
        />
        
        {/* Avatar container */}
        <div className="w-full h-full rounded-full border-[6px] border-white dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-700 overflow-hidden relative backdrop-blur-sm pointer-events-auto">
          <Avatar3D volume={volume} />
        </div>
        
        {/* Status dot */}
        <div className={`absolute bottom-4 right-4 w-6 h-6 rounded-full border-4 border-white dark:border-slate-800 shadow-sm ${isLive ? 'bg-green-500' : 'bg-slate-400'}`} />
      </div>

      <div className="text-center space-y-2 max-w-md px-4">
        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          Hola! How are you today?
        </h2>
        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium">
          Let's practice your conversational skills.
        </p>
      </div>
    </main>
  );
}
