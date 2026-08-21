"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, LogOut, Moon, Home, MessageSquare, Layers, Brain, Search, Edit3, Bot } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('Logged out successfully');
  };

  const navItems = [
    { label: 'Dashboard', icon: Home, href: '/' },
    { label: 'Percakapan', icon: MessageSquare, href: '/percakapan' },
    { label: 'Kosakata', icon: Layers, href: '/kosakata' },
    { label: 'Kuis', icon: Brain, href: '/kuis' },
    { label: 'Kamus', icon: Search, href: '/kamus' },
    { label: 'Nahwu Shorof', icon: Edit3, href: '/nahwu' },
    { label: 'Tutor AI', icon: Bot, href: '/chat' },
  ];

  return (
    <header className="w-full bg-slate-50 relative z-40 border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl shadow-md">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                Al-Hiwar <span className="text-orange-400 font-serif font-normal text-xl">الحوار</span>
              </h1>
              <p className="text-sm font-medium text-slate-500">Platform Belajar Bahasa Arab</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-xs font-bold text-slate-500 mb-1">Progres: 0%</span>
              <div className="w-32 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-0"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                <Moon size={20} />
              </button>
              {isLoggedIn && (
                <button 
                  onClick={handleLogout}
                  title="Log Out"
                  className="p-2.5 rounded-full bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 transition-colors"
                >
                  <LogOut size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
        <nav className="flex items-center overflow-x-auto border-t border-slate-100 pt-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (pathname === '/chat' && item.href === '/chat');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center min-w-[100px] flex-1 py-3 px-2 gap-1.5 border-b-4 transition-all ${isActive ? 'border-blue-600 text-blue-600 bg-blue-50/50' : 'border-transparent text-slate-500 hover:text-blue-500 hover:bg-slate-50'}`}
              >
                <item.icon size={20} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                <span className={`text-sm ${isActive ? 'font-bold' : 'font-semibold'}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
