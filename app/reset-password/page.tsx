"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Lock, KeyRound } from 'lucide-react';

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Memeriksa apakah user sudah memiliki sesi yang valid hasil klik link di email
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        setErrorMsg('Sesi tidak valid. Pastikan Anda membuka link langsung dari email Anda, atau token mungkin sudah kadaluarsa.');
      }
    });
  }, []);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setErrorMsg('Password harus minimal 6 karakter.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) {
        setErrorMsg('Gagal mengubah password: ' + error.message);
      } else {
        setSuccessMsg('Password berhasil diubah! Anda akan dialihkan ke halaman utama...');
        setTimeout(() => {
          router.push('/');
        }, 3000);
      }
    } catch (err: any) {
      setErrorMsg('Terjadi kesalahan sistem.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 font-sans">
      <div className="bg-white dark:bg-slate-900 rounded-[24px] p-8 w-full max-w-[400px] text-center shadow-2xl border border-slate-100 dark:border-slate-800">
        <div className="w-20 h-20 bg-emerald-600 rounded-[24px] flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-emerald-600/30">
          <KeyRound size={40} />
        </div>
        
        <h2 className="text-2xl font-extrabold text-slate-800 dark:text-slate-200 mb-2">Buat Password Baru</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
          Silakan masukkan password baru Anda yang kuat dan mudah diingat.
        </p>

        {errorMsg && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm font-medium text-left">
            {errorMsg}
          </div>
        )}

        {successMsg && (
          <div className="mb-4 p-3 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-xl text-sm font-medium text-left">
            {successMsg}
          </div>
        )}
        
        <form className="flex flex-col gap-4" onSubmit={handleUpdatePassword}>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="password" 
              required 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Ketik password baru Anda..." 
              className="w-full py-3.5 pl-12 pr-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium text-slate-700 dark:text-slate-300"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading || !!successMsg}
            className="w-full py-4 mt-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-base transition-colors shadow-md shadow-emerald-600/20 disabled:opacity-70"
          >
            {isLoading ? 'Menyimpan...' : 'Simpan Password Baru'}
          </button>
        </form>

        <button 
          onClick={() => router.push('/')}
          className="mt-6 text-sm font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
        >
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
}
