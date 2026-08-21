import Header from '@/components/Header';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4 capitalize">kosakata</h1>
        <p className="text-slate-500 max-w-md">
          Halaman ini sedang dalam proses migrasi dari HTML klasik ke teknologi React/Next.js. Konten akan segera tersedia!
        </p>
      </main>
    </div>
  );
}
