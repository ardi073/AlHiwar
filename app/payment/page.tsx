'use client';

import { useState } from 'react';
import { CreditCard, QrCode, Mail, Lock, User, CheckCircle2, ChevronRight, Loader2 } from 'lucide-react';

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    paymentMethod: 'QRIS',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMethodSelect = (method: string) => {
    setFormData({ ...formData, paymentMethod: method });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSuccess(true);
      } else {
        alert('Gagal mendaftar: ' + result.error);
      }
    } catch (error) {
      alert('Terjadi kesalahan sistem.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-6 text-white">
        <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Pendaftaran Berhasil!</h2>
          <p className="text-neutral-400">
            Terima kasih telah mendaftar, <strong>{formData.name}</strong>. Silakan cek email Anda ({formData.email}) untuk instruksi pembayaran lebih lanjut.
          </p>
          <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/50">
            <p className="text-sm text-neutral-300">
              Metode Pembayaran: <strong className="text-white">{formData.paymentMethod}</strong><br/>
              Total: <strong className="text-emerald-400">Rp 37.000</strong>
            </p>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col lg:flex-row text-white selection:bg-emerald-500/30">
      {/* Left side - Info */}
      <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="z-10 max-w-xl mx-auto lg:mx-0">
          <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-medium text-neutral-300">Premium Membership</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Tingkatkan Akses <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Belajar Anda.</span>
          </h1>
          
          <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
            Dapatkan akses penuh ke fitur eksklusif AlHiwar. Belajar bahasa Arab dengan AI tutor cerdas tanpa batas.
          </p>
          
          <div className="space-y-4 mb-10">
            {['Akses 24/7 ke AI Tutor', 'Percakapan suara realistis', 'Progress tracker personal', 'Materi premium tak terbatas'].map((feature, i) => (
              <div key={i} className="flex items-center space-x-3 text-neutral-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-400 mb-1">Total Pembayaran</p>
              <p className="text-3xl font-bold text-white">Rp 37.000<span className="text-sm text-neutral-500 font-normal">/bulan</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="lg:w-1/2 p-8 lg:p-16 flex items-center justify-center bg-black/40 backdrop-blur-xl border-l border-neutral-800/50">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
          
          <div>
            <h2 className="text-2xl font-bold mb-2">Buat Akun Member</h2>
            <p className="text-neutral-400 text-sm">Silakan lengkapi data diri Anda untuk melanjutkan.</p>
          </div>

          <div className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-neutral-300 ml-1">Nama Lengkap</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-neutral-500" />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-neutral-900/50 border border-neutral-800 text-white rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all outline-none"
                  placeholder="Masukkan nama Anda"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-neutral-300 ml-1">Alamat Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-neutral-500" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-neutral-900/50 border border-neutral-800 text-white rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all outline-none"
                  placeholder="anda@email.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-neutral-300 ml-1">Kata Sandi</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-neutral-500" />
                </div>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-neutral-900/50 border border-neutral-800 text-white rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all outline-none"
                  placeholder="Buat kata sandi"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <label className="text-sm font-medium text-neutral-300 ml-1">Pilih Metode Pembayaran</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleMethodSelect('QRIS')}
                className={`p-4 border rounded-2xl flex flex-col items-center justify-center space-y-3 transition-all ${
                  formData.paymentMethod === 'QRIS' 
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
                    : 'border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:border-neutral-700'
                }`}
              >
                <QrCode className={`w-8 h-8 ${formData.paymentMethod === 'QRIS' ? 'text-emerald-400' : 'text-neutral-500'}`} />
                <span className="font-semibold text-sm">QRIS</span>
              </button>
              
              <button
                type="button"
                onClick={() => handleMethodSelect('Bank Transfer')}
                className={`p-4 border rounded-2xl flex flex-col items-center justify-center space-y-3 transition-all ${
                  formData.paymentMethod === 'Bank Transfer' 
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
                    : 'border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:border-neutral-700'
                }`}
              >
                <CreditCard className={`w-8 h-8 ${formData.paymentMethod === 'Bank Transfer' ? 'text-emerald-400' : 'text-neutral-500'}`} />
                <span className="font-semibold text-sm">Bank Transfer</span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed group mt-6"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                Lanjutkan Pembayaran
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
