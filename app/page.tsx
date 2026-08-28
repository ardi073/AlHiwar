"use client";
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { Flame, CheckCircle, Star, Bot, Lock, Mail, Info } from 'lucide-react';
import dynamic from 'next/dynamic';

const PercakapanTab = dynamic(() => import('@/components/tabs/PercakapanTab'), { ssr: false });
const KosakataTab = dynamic(() => import('@/components/tabs/KosakataTab'), { ssr: false });
const KuisTab = dynamic(() => import('@/components/tabs/KuisTab'), { ssr: false });
const KamusTab = dynamic(() => import('@/components/tabs/KamusTab'), { ssr: false });
const NahwuTab = dynamic(() => import('@/components/tabs/NahwuTab'), { ssr: false });
const ChatTab = dynamic(() => import('@/components/tabs/ChatTab'), { ssr: false });

export default function AppContainer() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // This could read from localStorage to sync progress across reloads
    setProgressPercent(10);
  }, []);

  return (
    <div className={isDarkMode ? "dark" : ""}>
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans overflow-hidden">
      <Header 
        activeTab={activeTab} 
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
        setActiveTab={setActiveTab} 
        progressPercent={progressPercent}
        isPremium={isPremium}
        onLogout={() => {
          setIsPremium(false);
          setShowLoginModal(true);
        }}
      />
      
      <main className="flex-1 w-full relative flex flex-col overflow-hidden">
        
        {activeTab === 'dashboard' && (
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 overflow-y-auto custom-scrollbar h-full">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-8 border border-blue-100 shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                  Marhaban di Al-Hiwar! 👋
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
                  Aplikasi interaktif belajar bahasa Arab dengan skenario sehari-hari. Pantau kemajuan belajar Anda, uji pemahaman lewat kuis, dan tingkatkan keterampilan makhraj lewat obrolan asisten AI!
                </p>
              </div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="p-4 bg-orange-50 text-orange-500 rounded-xl">
                  <Flame size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800 dark:text-slate-200">1 Hari</h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Streak Belajar</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="p-4 bg-emerald-50 text-emerald-500 rounded-xl">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800 dark:text-slate-200">10%</h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Tema Selesai</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950 text-blue-500 rounded-xl">
                  <Star size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800 dark:text-slate-200">0 Kata</h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Favorit Tersimpan</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950 text-indigo-500 rounded-xl">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800 dark:text-slate-200">0 Chat</h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Latihan AI</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'percakapan' && <PercakapanTab isPremium={isPremium} />}
        {activeTab === 'kosakata' && <KosakataTab isPremium={isPremium} />}
        {activeTab === 'kuis' && <KuisTab isPremium={isPremium} />}
        {activeTab === 'kamus' && <KamusTab isPremium={isPremium} />}
        {activeTab === 'nahwu' && <NahwuTab isPremium={isPremium} />}
        {activeTab === 'chat' && <ChatTab isPremium={isPremium} />}

      </main>

            {/* Login Modal Overlay */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9999] overflow-y-auto">
          <div className="min-h-full flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 rounded-[24px] p-8 w-full max-w-[380px] text-center shadow-2xl border border-slate-100 dark:border-slate-800">
              <div className="w-20 h-20 bg-emerald-600 rounded-[24px] flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-emerald-600/30">
                <Lock size={40} />
              </div>
              
              <h2 className="text-2xl font-extrabold text-slate-800 dark:text-slate-200 mb-2">Masuk ke Al-Hiwar</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Gunakan email yang sudah Anda daftarkan di website.</p>
              
              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('Login berhasil (Simulasi)!'); setIsPremium(true); setShowLoginModal(false); }}>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="email" 
                    required 
                    placeholder="Email Anda" 
                    className="w-full py-3.5 pl-12 pr-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium text-slate-700 dark:text-slate-300"
                  />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="password" 
                    required 
                    placeholder="Kata Sandi" 
                    className="w-full py-3.5 pl-12 pr-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium text-slate-700 dark:text-slate-300"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 mt-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-base transition-colors shadow-md shadow-emerald-600/20"
                >
                  Masuk Sekarang
                </button>
                
                <button 
                  type="button" 
                  onClick={() => setShowLoginModal(false)}
                  className="w-full py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 rounded-xl font-bold text-base transition-colors"
                >
                  Gunakan Versi Gratis
                </button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-3">Belum punya akun Premium?</p>
                <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50 text-left">
                  <Info size={20} className="text-emerald-600 mb-2" />
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Sesuai dengan kebijakan privasi, saat ini pendaftaran akun Premium baru tidak dapat dilakukan melalui aplikasi ini.
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-2 text-center">
                    Silakan masuk menggunakan akun yang sudah Anda miliki.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background-color: #94a3b8; }
      `}} />
    </div>
    </div>
  );
}
