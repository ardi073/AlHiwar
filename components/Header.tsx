import { Settings, Flame } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-10">
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold text-xl shadow-inner flex-shrink-0">
            L2
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-xl leading-tight text-slate-800 dark:text-white">Beginner</h1>
            <div className="flex items-center text-orange-500 text-sm font-semibold mt-0.5">
              <Flame size={16} className="mr-1" />
              <span>12 Day Streak</span>
            </div>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm flex-shrink-0">
          <Settings size={24} className="text-slate-600 dark:text-slate-300" />
        </button>
      </div>
    </header>
  );
}
