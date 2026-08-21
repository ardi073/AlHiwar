"use client";
import { useState } from 'react';
import Header from '@/components/Header';
import MainDisplay from '@/components/MainDisplay';
import FeedbackPanel from '@/components/FeedbackPanel';
import ActionBar from '@/components/ActionBar';
import { useAudioChat } from '@/lib/audio/useAudioChat';
import { ChevronDown, Trash2 } from 'lucide-react';

export default function ChatPage() {
  const { status, volume, feedbacks, startSession, stopSession } = useAudioChat();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState('Perkenalan');

  const scenarios = [
    { type: 'Gratis (Trial)', items: ['Perkenalan', 'Di Restoran', 'Di Sekolah'] },
    { type: 'Premium (SaaS)', items: ['Di Pasar', 'Keluarga', 'Di Bandara', 'Hobi', 'Rumah Sakit', 'Pekerjaan', 'Cuaca & Musim'] }
  ];

  return (
    <div className="flex h-screen w-full bg-slate-50 text-slate-900 overflow-hidden relative font-sans">
      <div className="flex-1 flex flex-col relative h-full">
        <Header />
        <div className="flex-1 flex w-full h-full relative">
          <div className="absolute top-6 left-6 z-50">
            <div className="flex items-center gap-2">
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-40 bg-white border border-slate-200 shadow-sm rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span className="truncate">{selectedScenario}</span>
                  <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 text-white rounded-2xl shadow-xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-2">
                    {scenarios.map((group, idx) => (
                      <div key={idx}>
                        <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {group.type}
                        </div>
                        {group.items.map(item => (
                          <button
                            key={item}
                            onClick={() => { setSelectedScenario(item); setIsDropdownOpen(false); }}
                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-700 transition-colors ${selectedScenario === item ? 'bg-slate-700/50 text-blue-400 font-semibold' : 'text-slate-200'}`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button 
                title="Hapus riwayat obrolan"
                className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 shadow-sm rounded-full text-red-500 hover:bg-red-50 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
          <MainDisplay volume={volume} status={status} />
        </div>
        <ActionBar 
          status={status} 
          onToggleMic={status === 'Live' ? stopSession : startSession} 
        />
      </div>
      <FeedbackPanel feedbacks={feedbacks} />
    </div>
  );
}
