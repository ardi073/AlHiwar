"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut, LogIn, User } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  // Mock login state for now
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logged out successfully"); // Mock action
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    alert("Logged in successfully"); // Mock action
  };

  return (
    <header className="absolute top-0 w-full z-40 bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-4">
        
        {/* Brand & Nav */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-600 font-bold text-xl shadow-sm">
              <User size={20} />
            </div>
            <h1 className="font-extrabold text-xl tracking-tight text-white">Al-Hiwar</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-1 bg-blue-700/50 p-1 rounded-full">
            <Link 
              href="/chat" 
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${pathname === '/chat' ? 'bg-white text-blue-600 shadow-sm' : 'text-blue-100 hover:bg-blue-600/50'}`}
            >
              Chat
            </Link>
            <Link 
              href="/kamus" 
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${pathname === '/kamus' ? 'bg-white text-blue-600 shadow-sm' : 'text-blue-100 hover:bg-blue-600/50'}`}
            >
              Kamus
            </Link>
          </nav>
        </div>

        {/* Actions (Login / Logout) */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors shadow-sm"
            >
              <LogOut size={16} />
              <span>Log Out</span>
            </button>
          ) : (
            <button 
              onClick={handleLogin}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-gray-100 text-blue-600 text-sm font-semibold transition-colors shadow-sm"
            >
              <LogIn size={16} />
              <span>Sign In</span>
            </button>
          )}
        </div>
        
      </div>
    </header>
  );
}
