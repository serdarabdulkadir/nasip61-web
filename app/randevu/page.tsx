"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export default function AppointmentPage() {
  
  // Cal.com Bağlantısı (Senin verdiğin yeni link)
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {
        "hideEventTypeDetails": false,
        "layout": "month_view",
        "theme": "light",
        "styles": {
          "branding": {
            "brandColor": "#d97706" // Nasip61 Gold Rengi
          }
        }
      });
    })();
  }, []);

  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-stone-50">
      
      {/* --- SOL TARAF: GÖRSEL ATMOSFER (Mobilde gizli veya küçük) --- */}
      <div className="lg:w-1/2 relative h-64 lg:h-auto bg-emerald-950 overflow-hidden">
        {/* Arka Plan Resmi */}
        <div className="absolute inset-0 opacity-60">
           <img 
             src="/Nasip61 Logo.svg" 
             alt="Nasip61 Atmosfer" 
             className="w-full h-full object-cover"
           />
        </div>
        {/* Üzerindeki Yazı */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent flex flex-col justify-end p-12 text-white">
           <div className="w-16 h-1 bg-amber-500 mb-6"></div>
           <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-4">
             "En güzel hikayeler, <br/>
             bir kahveyle başlar."
           </h2>
           <p className="text-stone-300 font-light text-lg">
             Nasip61 Organizasyon & Davet Evi
           </p>
        </div>
      </div>

      {/* --- SAĞ TARAF: RANDEVU ALANI --- */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center p-8 md:p-16 relative">
        
        {/* Geri Dön Butonu (Sağ üst köşe) */}
        <Link href="/" className="absolute top-8 right-8 text-stone-400 hover:text-emerald-900 transition-colors flex items-center gap-2 text-sm font-medium">
          <ArrowLeft size={16} /> Ana Sayfaya Dön
        </Link>

        <div className="max-w-md w-full text-center lg:text-left animate-fade-in-up">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-2 block">Ücretsiz Ön Görüşme</span>
          <h1 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-6">Tanışalım</h1>
          
          <p className="text-stone-600 leading-relaxed mb-8 text-lg">
            Hayalinizdeki organizasyonu planlamak, davet evimizi gezmek veya sadece detayları konuşmak için sizi ofisimizde ağırlamaktan mutluluk duyarız.
          </p>

          {/* BİLGİ KUTUCUKLARI */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-3">
              <div className="bg-emerald-100 text-emerald-700 p-2 rounded-full"><Clock size={18}/></div>
              <div className="text-left">
                <span className="block text-xs text-stone-400">Süre</span>
                <span className="font-semibold text-emerald-950">30 Dakika</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-3">
              <div className="bg-amber-100 text-amber-700 p-2 rounded-full"><MapPin size={18}/></div>
              <div className="text-left">
                <span className="block text-xs text-stone-400">Konum</span>
                <span className="font-semibold text-emerald-950">Ofis / Online</span>
              </div>
            </div>
          </div>

          {/* --- SENİN KODUNUN TASARLANMIŞ HALİ --- */}
          <button 
            data-cal-namespace="30min"
            data-cal-link="nasip61-organizasyon-fjepq1/30min"
            data-cal-config='{"layout":"month_view"}'
            className="group w-full bg-emerald-900 text-white text-lg font-medium py-5 px-8 rounded-xl hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-3 active:scale-[0.98] cursor-pointer"
          >
            <Calendar size={22} className="text-amber-400 group-hover:text-white transition-colors" />
            <span>Hemen Randevu Oluştur</span>
          </button>
          
          <p className="mt-6 text-xs text-stone-400 text-center lg:text-left">
            * Randevu oluşturduğunuzda size otomatik onay maili iletilecektir.
          </p>
        </div>
      </div>

    </main>
  );
};