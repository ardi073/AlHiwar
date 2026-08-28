"use client";
import { BookOpen, Home, MessageCircle, Bot, Brain, Library, PenTool, Moon, LogOut } from 'lucide-react';

interface HeaderProps {
  isPremium?: boolean;
  onLogout?: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  progressPercent: number;
}

export default function Header({ activeTab, setActiveTab, progressPercent, isPremium, onLogout }: HeaderProps) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { id: 'percakapan', label: 'Percakapan', icon: <MessageCircle size={20} /> },
    { id: 'kosakata', label: 'Kosakata', icon: <Library size={20} /> },
    { id: 'kuis', label: 'Kuis', icon: <Brain size={20} /> },
    { id: 'kamus', label: 'Kamus', icon: <BookOpen size={20} /> },
    { id: 'nahwu', label: 'Nahwu Shorof', icon: <PenTool size={20} /> },
    { id: 'chat', label: 'Tutor AI', icon: <Bot size={20} /> },
  ];

  return (
    <div className="w-full bg-white shadow-sm flex flex-col z-40 relative">
      {/* Top Header Row */}
      <header className="w-full flex items-center justify-between px-6 py-4 border-b border-blue-50 bg-white">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-xl shadow-md shadow-blue-600/20">
            <BookOpen size={24} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-extrabold text-2xl tracking-tight text-slate-800 flex items-center gap-2">
              Al-Hiwar <span className="font-serif text-orange-500 font-normal" dir="rtl">الحوار</span>
            </h1>
            <p className="text-slate-500 text-sm font-medium">Platform Belajar Bahasa Arab</p>
          </div>
        </div>
        
        {/* Actions & Progress */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs font-bold text-slate-500">Progres: <strong className="text-blue-600">{progressPercent}%</strong></span>
            <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
          
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 text-slate-500 hover:bg-slate-100 transition-colors">
            <Moon size={20} />
          </button>
          {isPremium && (
            <button 
              onClick={onLogout}
              title="Keluar (Logout)"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
            >
              <LogOut size={20} />
            </button>
          )}
        </div>
      </header>

      {/* Navigation Tabs (Scrollable) */}
      <nav className="w-full bg-white border-b border-slate-200 overflow-x-auto hide-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center px-2">
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center min-w-[120px] px-4 py-3 gap-1 relative transition-colors ${isActive ? 'text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}
              >
                {tab.icon}
                <span className={`text-sm ${isActive ? 'font-bold' : 'font-medium'}`}>{tab.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
