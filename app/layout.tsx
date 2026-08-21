import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al-Hiwar | Platform Belajar Bahasa Arab",
  description: "Platform edukasi interaktif belajar percakapan Bahasa Arab dengan Tutor AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* Load Legacy Data Scripts */}
        <Script src="/data/data-loader.js" strategy="beforeInteractive" />
        <Script src="/data/theme-taaruf.js" strategy="beforeInteractive" />
        <Script src="/data/theme-matham.js" strategy="beforeInteractive" />
        <Script src="/data/theme-madrasah.js" strategy="beforeInteractive" />
        <Script src="/data/theme-suq.js" strategy="beforeInteractive" />
        <Script src="/data/theme-usrah.js" strategy="beforeInteractive" />
        <Script src="/data/theme-mathar.js" strategy="beforeInteractive" />
        <Script src="/data/theme-hiwayah.js" strategy="beforeInteractive" />
        <Script src="/data/theme-mustasyfa.js" strategy="beforeInteractive" />
        <Script src="/data/nahwu.js" strategy="beforeInteractive" />
        
        {children}
      </body>
    </html>
  );
}