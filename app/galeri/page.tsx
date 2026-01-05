"use client";

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, X, ZoomIn, Camera } from 'lucide-react';

// --- GALERİ VERİLERİ ---
const galleryCategories = [
  { id: 'davet-evi', label: 'Davet Evi & İsteme' },
  { id: 'nisan-soz', label: 'Nişan & Söz' },
  { id: 'kina-gecesi', label: 'Kına Gecesi' },
  { id: 'dogum-gunu', label: 'Doğum Günü' },
  { id: 'acilis', label: 'Açılış & Kurumsal' },
  { id: 'dini', label: 'İcazet & Mevlüt' },
];

const galleryImages: Record<string, string[]> = {
  'davet-evi': [
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000",
    "https://images.unsplash.com/photo-1544598075-846f4370e53a?q=80&w=1000",
    "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=1000",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000",
  ],
  'nisan-soz': [
    "https://images.unsplash.com/photo-1522673607200-1645062cd955?q=80&w=1000",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000",
  ],
  'kina-gecesi': [
    "https://images.unsplash.com/photo-1546195847-bfbd92b51268?q=80&w=1000",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000",
    "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000",
  ],
  'dogum-gunu': [
    "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?q=80&w=1000",
    "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?q=80&w=1000",
    "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?q=80&w=1000",
  ],
  'acilis': [
    "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=1000",
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000",
  ],
  'dini': [
    "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000",
    "https://images.unsplash.com/photo-1594632367469-8a306ae01e9d?q=80&w=1000",
  ]
};

// URL'den parametre okuma işlemini bu bileşende yapıyoruz
function GalleryContent() {
  const searchParams = useSearchParams();
  // URL'de 'tab' varsa onu al, yoksa 'davet-evi'ni aç
  const initialTab = searchParams.get('tab') || 'davet-evi';
  
  // Eğer gelen tab bizim listemizde yoksa varsayılanı kullan (Hata önlemek için)
  const safeTab = galleryCategories.some(c => c.id === initialTab) ? initialTab : 'davet-evi';

  const [activeTab, setActiveTab] = useState(safeTab);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* SEKMELER */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all border ${
              activeTab === cat.id
                ? 'bg-amber-600 text-white border-amber-600 shadow-lg scale-105'
                : 'bg-white text-stone-500 border-stone-200 hover:border-amber-400 hover:text-amber-600'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* RESİM IZGARASI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in-up">
        {galleryImages[activeTab]?.map((src, index) => (
          <div 
            key={index} 
            className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white border border-stone-100"
            onClick={() => setSelectedImage(src)}
          >
            <img 
              src={src} 
              alt={`Galeri Görseli ${index + 1}`} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
               <div className="bg-white/20 p-3 rounded-full text-white backdrop-blur-md transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn size={28} />
               </div>
            </div>
          </div>
        ))}
      </div>

      {(!galleryImages[activeTab] || galleryImages[activeTab].length === 0) && (
         <div className="text-center py-20 text-stone-400 flex flex-col items-center">
           <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mb-4 text-stone-400">
             <Camera size={30}/>
           </div>
           <p>Bu kategoriye henüz görsel eklenmedi.</p>
         </div>
      )}

      {/* LIGHTBOX */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Tam Ekran" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
}

// Ana Bileşen (Suspense Kapsayıcısı ile)
// Next.js'de URL parametrelerini okumak için Suspense şarttır (Build hatası almamak için)
export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-stone-50 pb-20">
      <div className="bg-emerald-950 py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-amber-400 mb-8 transition-colors text-sm uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
             <ArrowLeft size={16} /> Ana Sayfaya Dön
          </Link>
          <div className="bg-amber-500/20 p-4 rounded-full mb-4 text-amber-400">
            <Camera size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Fotoğraf Galerisi</h1>
          <p className="text-emerald-100/80 font-light text-lg max-w-xl">
            Mutluluğunuza şahitlik ettiğimiz en özel anlardan kareler. Daha fazlası için instagram hesabımızı ziyaret edebilirsiniz.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <Suspense fallback={<div className="text-center py-20">Galeri Yükleniyor...</div>}>
          <GalleryContent />
        </Suspense>
      </div>
    </main>
  );
}