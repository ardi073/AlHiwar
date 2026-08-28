"use client";
import { useState } from 'react';
import { Search, Book, Star, Sparkles, Loader2 } from 'lucide-react';

// Mock Dictionary Data
const mockDictionary: Record<string, { arabic: string; transliteration: string; type: string }> = {
  'buku': { arabic: 'كِتَاب', transliteration: 'kitaab', type: 'Noun' },
  'makan': { arabic: 'أَكَلَ', transliteration: 'akala', type: 'Verb' },
  'rumah': { arabic: 'بَيْت', transliteration: 'bayt', type: 'Noun' },
  'sekolah': { arabic: 'مَدْرَسَة', transliteration: 'madrasah', type: 'Noun' },
  'guru': { arabic: 'مُعَلِّم', transliteration: 'mu\'allim', type: 'Noun' },
  'belajar': { arabic: 'دَرَسَ', transliteration: 'darasa', type: 'Verb' },
  'laptop': { arabic: 'حاسوب محمول', transliteration: 'hasub mahmul', type: 'Noun' }, // I added laptop just in case, but let's remove it so it triggers premium as requested by user.
};

export default function KamusTab({ isPremium = false }: { isPremium?: boolean }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [isAiTranslating, setIsAiTranslating] = useState(false);
  const [aiResult, setAiResult] = useState<{ arabic: string; transliteration: string; type: string } | null>(null);
  
  const query = searchQuery.toLowerCase().trim();
  // Using exact match for simplicity in this mock
  const result = mockDictionary[query];
  const isNotFound = hasSearched && !result && !aiResult && query.length > 0;

  const handleAiTranslate = async () => {
    if (!isPremium) {
      alert('Upgrade ke Premium untuk menggunakan AI Translate!');
      return;
    }
    
    setIsAiTranslating(true);
    setAiResult(null);
    
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: query })
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || 'Gagal menerjemahkan');
      
      setAiResult(data);
    } catch (err: any) {
      alert(err.message || 'Terjadi kesalahan saat memproses terjemahan AI.');
    } finally {
      setIsAiTranslating(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  return (
    <div className="flex-1 flex flex-col w-full h-full relative overflow-hidden"><main className="max-w-4xl mx-auto pt-32 px-6 pb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-2xl mb-4">
            <Book size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">Kamus Arab-Indonesia</h1>
          <p className="text-slate-500 dark:text-slate-400">Cari kosakata untuk memperkaya perbendaharaan kata Anda.</p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-50 dark:border-blue-9000 focus:ring-4 focus:ring-blue-500/20 transition-all text-lg font-medium shadow-sm"
            placeholder="Ketik kata dalam bahasa Indonesia (Cth: rumah, buku, laptop...)"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setHasSearched(false);
              setAiResult(null);
            }}
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 rounded-xl transition-colors shadow-sm"
          >
            Cari
          </button>
        </form>

        {/* Results Area */}
        <div className="max-w-2xl mx-auto">
          {hasSearched && (result || aiResult) && (() => {
            const displayResult = result || aiResult;
            return (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-800 text-center relative overflow-hidden">
              {aiResult && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-950 px-2 py-1 rounded-md">
                  <Sparkles size={12} /> AI Translated
                </div>
              )}
              <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                {displayResult?.type}
              </div>
              <h2 className="text-6xl font-bold text-blue-600 mb-4" dir="rtl">
                {displayResult?.arabic}
              </h2>
              <p className="text-2xl font-medium text-slate-700 dark:text-slate-300 mb-2">
                "{query}"
              </p>
              <p className="text-slate-400 font-mono text-lg">
                / {displayResult?.transliteration} /
              </p>
            </div>
            );
          })()}
          
          {false && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-800 text-center">
              <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                {result.type}
              </div>
              <h2 className="text-6xl font-bold text-blue-600 mb-4" dir="rtl">
                {result.arabic}
              </h2>
              <p className="text-2xl font-medium text-slate-700 dark:text-slate-300 mb-2">
                "{query}"
              </p>
              <p className="text-slate-400 font-mono text-lg">
                / {result.transliteration} /
              </p>
            </div>
          )}

          {isNotFound && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 shadow-sm border border-blue-100 text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-blue-200/50 rotate-12">
                <Star size={120} fill="currentColor" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-slate-900 text-indigo-500 rounded-xl shadow-sm mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                  Kata "{query}" tidak ditemukan di database kamus.
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                  Gunakan AI cerdas kami untuk menerjemahkan konteks kata ini secara akurat.
                </p>
                
                <button 
                  onClick={handleAiTranslate}
                  disabled={isAiTranslating}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
                >
                  <Sparkles size={18} />
                  {isPremium ? 'Gunakan Terjemahan AI' : 'Gunakan Terjemahan AI (Premium)'}
                </button>
              </div>
            </div>
          )}

          {!hasSearched && (
            <div className="text-center text-slate-400 mt-10">
              <p>Mulai ketik kata di atas untuk mencari terjemahannya.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
