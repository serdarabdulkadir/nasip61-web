import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
// Next.js'in resmi Google kütüphanesini kullanıyoruz
import { GoogleAnalytics } from '@next/third-parties/google';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nasip61 Organizasyon | En Güzel Evet'ler",
  description: "Trabzon davet evi, kız isteme, nişan, söz ve butik organizasyon hizmetleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-stone-50 text-stone-800`}
      >
        {children}
        {/* Analytics ID'ni buraya tanımlıyoruz */}
        <GoogleAnalytics gaId="G-N813SRFY27" />
      </body>
    </html>
  );
}