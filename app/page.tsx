"use client";
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { Flame, CheckCircle, Star, Bot } from 'lucide-react';
import dynamic from 'next/dynamic';

const PercakapanTab = dynamic(() => import('@/components/tabs/PercakapanTab'), { ssr: false });
const KosakataTab = dynamic(() => import('@/components/tabs/KosakataTab'), { ssr: false });
const KuisTab = dynamic(() => import('@/components/tabs/KuisTab'), { ssr: false });
const KamusTab = dynamic(() => import('@/components/tabs/KamusTab'), { ssr: false });
const NahwuTab = dynamic(() => import('@/components/tabs/NahwuTab'), { ssr: false });
const ChatTab = dynamic(() => import('@/components/tabs/ChatTab'), { ssr: false });

export default function AppContainer() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    // This could read from localStorage to sync progress across reloads
    setProgressPercent(10);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-hidden">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        progressPercent={progressPercent} 
      />
      
      <main className="flex-1 w-full relative flex flex-col overflow-hidden">
        
        {activeTab === 'dashboard' && (
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 overflow-y-auto custom-scrollbar h-full">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-8 border border-blue-100 shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-black text-slate-900 mb-3 flex items-center gap-2">
                  Marhaban di Al-Hiwar! 👋
                </h2>
                <p className="text-slate-600 max-w-2xl text-lg leading-relaxed">
                  Aplikasi interaktif belajar bahasa Arab dengan skenario sehari-hari. Pantau kemajuan belajar Anda, uji pemahaman lewat kuis, dan tingkatkan keterampilan makhraj lewat obrolan asisten AI!
                </p>
              </div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="p-4 bg-orange-50 text-orange-500 rounded-xl">
                  <Flame size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800">1 Hari</h3>
                  <p className="text-sm font-semibold text-slate-500">Streak Belajar</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="p-4 bg-emerald-50 text-emerald-500 rounded-xl">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800">10%</h3>
                  <p className="text-sm font-semibold text-slate-500">Tema Selesai</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="p-4 bg-blue-50 text-blue-500 rounded-xl">
                  <Star size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800">0 Kata</h3>
                  <p className="text-sm font-semibold text-slate-500">Favorit Tersimpan</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="p-4 bg-indigo-50 text-indigo-500 rounded-xl">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800">0 Chat</h3>
                  <p className="text-sm font-semibold text-slate-500">Latihan AI</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'percakapan' && <PercakapanTab />}
        {activeTab === 'kosakata' && <KosakataTab />}
        {activeTab === 'kuis' && <KuisTab />}
        {activeTab === 'kamus' && <KamusTab />}
        {activeTab === 'nahwu' && <NahwuTab />}
        {activeTab === 'chat' && <ChatTab />}

      </main>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background-color: #94a3b8; }
      `}} />
    </div>
  );
}
