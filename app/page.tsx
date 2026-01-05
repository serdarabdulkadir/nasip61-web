"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Instagram, MapPin, Star, Gift, Heart, Coffee, CalendarCheck, ArrowRight } from 'lucide-react';

// --- Navbar Bileşeni ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="#hero" className="flex-shrink-0 flex items-center gap-2 group">
          <img src="/Nasip61Logo.png" alt="" className='h-14'/>
            <span className={`font-serif text-3xl font-bold tracking-tight transition-colors ${scrolled ? 'text-emerald-950' : 'text-white'}`}>
              Nasip61
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {['Ana Sayfa', 'Hizmetler', 'Ürünler'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className={`font-medium text-sm uppercase tracking-wide hover:text-amber-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-200'}`}
              >
                {item}
              </Link>
            ))}
            <Link 
              href="/galeri" 
              className={`font-medium text-sm uppercase tracking-wide hover:text-amber-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-200'}`}
            >
              Galeri
            </Link>
            <Link 
              href="/randevu" 
              className={`px-6 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all shadow-lg ${scrolled ? 'bg-emerald-900 text-white hover:bg-emerald-800' : 'bg-white text-emerald-950 hover:bg-stone-100'}`}
            >
              <CalendarCheck size={18} />
              Randevu Al
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${scrolled ? 'text-emerald-900' : 'text-white'}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full h-screen z-40 animate-fade-in-up">
          <div className="px-4 pt-8 pb-3 space-y-6 flex flex-col items-center text-lg">
            <Link onClick={() => setIsOpen(false)} href="#hero" className="font-serif text-stone-800 text-xl">Ana Sayfa</Link>
            <Link onClick={() => setIsOpen(false)} href="#hizmetler" className="font-serif text-stone-800 text-xl">Hizmetler</Link>
            <Link onClick={() => setIsOpen(false)} href="#ürünler" className="font-serif text-stone-800 text-xl">Ürünler</Link>
            <Link onClick={() => setIsOpen(false)} href="/galeri" className="font-serif text-stone-800 text-xl">Galeri</Link>
            <Link onClick={() => setIsOpen(false)} href="/randevu" className="bg-amber-600 text-white px-10 py-3 rounded-full mt-4 shadow-lg flex items-center gap-2">
              <CalendarCheck size={20}/> Randevu Oluştur
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 opacity-60">
           {/* Hero Resmi */}
           <div className="w-full h-full bg-[url('/Nasip.png')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-emerald-950/60"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in-up">
          <div className="inline-block px-5 py-2 border border-amber-500/30 rounded-full bg-emerald-900/40 backdrop-blur-md mb-8">
            <span className="text-amber-400 text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
              Trabzon'un En Zarif Davet Evi
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight">
            Hayalleriniz <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 italic pr-2">Nasip</span> Olsun
          </h1>
          <p className="text-stone-200 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Kız isteme merasiminden nişan törenine, en özel anlarınızı zarafet, güven ve profesyonellikle tasarlıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
             <Link href="/randevu" className="bg-amber-600 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-700 transition-all shadow-xl hover:shadow-amber-600/40 flex items-center justify-center gap-3">
               <CalendarCheck size={20} />
               Randevu Oluştur
             </Link>
             <Link href="#hizmetler" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-emerald-950 transition-all flex items-center justify-center gap-2">
               Hizmetleri İncele
             </Link>
          </div>
        </div>
      </section>

      {/* 2. HİZMETLER SECTION */}
      <section id="hizmetler" className="py-24 px-4 md:px-12 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-3">Hizmetlerimiz</h2>
              <div className="h-1.5 w-24 bg-amber-500 rounded-full"></div>
            </div>
            <p className="text-stone-600 max-w-lg text-lg text-right md:text-left">
              Modern vizyonumuz ve geleneksel dokunuşlarımızla, protokol stresinden uzak, samimi organizasyonlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kart 1: Davet Evi */}
            <Link href="/hizmetler/davet-evi" className="group bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 block border border-stone-100">
              <div className="h-72 bg-stone-200 rounded-[2rem] overflow-hidden relative">
                <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                {/* Resim: Nasip.png (Davet evi için) */}
                <div className="w-full h-full bg-[url('/Kızisteme.png')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur p-3 rounded-full z-20 shadow-lg">
                   <Star className="text-amber-600 w-6 h-6" />
                </div>
                <div className="absolute bottom-5 left-5 z-20">
                   <span className="bg-emerald-900 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold">Popüler</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-emerald-900 mb-3 group-hover:text-amber-600 transition-colors">Kız İsteme & Davet Evi</h3>
                <p className="text-stone-600 mb-6 text-sm leading-relaxed line-clamp-2">
                  Ev ortamı sıcaklığında, kalabalık ve stresten uzak, ikramlı ve tam kapsamlı kız isteme organizasyonu.
                </p>
                <span className="text-emerald-950 font-bold uppercase tracking-wider text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  İncele <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Kart 2: Nişan */}
            <Link href="/hizmetler/nisan-soz" className="group bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 block border border-stone-100">
              <div className="h-72 bg-stone-200 rounded-[2rem] overflow-hidden relative">
                 {/* Resim: Kızisteme.png */}
                 <div className="w-full h-full bg-[url('/Nasip.png')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
                 <div className="absolute top-5 right-5 bg-white/90 backdrop-blur p-3 rounded-full z-20 shadow-lg">
                   <Star className="text-amber-600 w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-emerald-900 mb-3 group-hover:text-amber-600 transition-colors">Nişan & Söz</h3>
                <p className="text-stone-600 mb-6 text-sm leading-relaxed line-clamp-2">
                  Size özel konsept taglar, modern masa süslemeleri ile eksiksiz bir kutlama.
                </p>
                <span className="text-emerald-950 font-bold uppercase tracking-wider text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  İncele <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Kart 3: Açılış */}
            <Link href="/hizmetler/acilis" className="group bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 block border border-stone-100">
              <div className="h-72 bg-stone-200 rounded-[2rem] overflow-hidden relative">
                 {/* Resim: Açılış için de Kızisteme.png kullanılmış (Kullanıcı verisine göre) */}
                 <div className="w-full h-full bg-[url('/Açılış.png')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
                 <div className="absolute top-5 right-5 bg-white/90 backdrop-blur p-3 rounded-full z-20 shadow-lg">
                   <Star className="text-amber-600 w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-emerald-900 mb-3 group-hover:text-amber-600 transition-colors">Açılış</h3>
                <p className="text-stone-600 mb-6 text-sm leading-relaxed line-clamp-2">
                  İş yeri açılışlarınızda balon süsleme, kokteyl masaları hizmetlerimizle yanınızdayız.
                </p>
                <span className="text-emerald-950 font-bold uppercase tracking-wider text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  İncele <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Kart 4: Kına */}
            <Link href="/hizmetler/kina-gecesi" className="group bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 block border border-stone-100">
              <div className="h-72 bg-stone-200 rounded-[2rem] overflow-hidden relative">
                 {/* Resim: Kına.png */}
                 <div className="w-full h-full bg-[url('/Kına.png')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
                 <div className="absolute top-5 right-5 bg-white/90 backdrop-blur p-3 rounded-full z-20 shadow-lg">
                   <Star className="text-amber-600 w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-emerald-900 mb-3 group-hover:text-amber-600 transition-colors">Kına Gecesi</h3>
                <p className="text-stone-600 mb-6 text-sm leading-relaxed line-clamp-2">
                  Kına tahtı, size özel konsept taglar ile unutulmaz bir kına gecesi organizasyonu.
                </p>
                <span className="text-emerald-950 font-bold uppercase tracking-wider text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  İncele <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Kart 5: Doğum Günü */}
            <Link href="/hizmetler/dogum-gunu" className="group bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 block border border-stone-100">
              <div className="h-72 bg-stone-200 rounded-[2rem] overflow-hidden relative">
                 {/* Resim: Kızisteme.png (Kullanıcı verisine göre) */}
                 <div className="w-full h-full bg-[url('/Kızisteme.png')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
                 <div className="absolute top-5 right-5 bg-white/90 backdrop-blur p-3 rounded-full z-20 shadow-lg">
                   <Gift className="text-amber-600 w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-emerald-900 mb-3 group-hover:text-amber-600 transition-colors">Doğum Günü</h3>
                <p className="text-stone-600 mb-6 text-sm leading-relaxed line-clamp-2">
                  Tüm doğum günü kutlamalarında kişiye özel balon ve arka plan tasarımları.
                </p>
                <span className="text-emerald-950 font-bold uppercase tracking-wider text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  İncele <ArrowRight size={16} />
                </span>
              </div>
            </Link>
            {/* Kart 6: Dini */}
            <Link href="/hizmetler/dini" className="group bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 block border border-stone-100">
              <div className="h-72 bg-stone-200 rounded-[2rem] overflow-hidden relative">
                 {/* Resim: Kızisteme.png (Kullanıcı verisine göre) */}
                 <div className="w-full h-full bg-[url('/Dini1.png')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
                 <div className="absolute top-5 right-5 bg-white/90 backdrop-blur p-3 rounded-full z-20 shadow-lg">
                   <Gift className="text-amber-600 w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-emerald-900 mb-3 group-hover:text-amber-600 transition-colors">Hafızlık İcazet & Mevlüt</h3>
                <p className="text-stone-600 mb-6 text-sm leading-relaxed line-clamp-2">
                  Tüm doğum günü kutlamalarında kişiye özel balon ve arka plan tasarımları.
                </p>
                <span className="text-emerald-950 font-bold uppercase tracking-wider text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  İncele <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* RANDEVU BANNER */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="text-center md:text-left">
             <span className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-2 block">Ücretsiz Ön Görüşme</span>
             <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Kahvemizi İçmeye Bekleriz</h2>
             <p className="text-emerald-100/80 text-lg max-w-xl">
               Aklınızdaki soruları yanıtlamak ve davet evimizi yerinde görmeniz için sizi ofisimize davet ediyoruz.
             </p>
           </div>
           
           <Link href="/randevu" className="group bg-white text-emerald-950 px-10 py-5 rounded-full font-bold text-lg hover:bg-amber-400 transition-all shadow-2xl flex items-center gap-3">
             <CalendarCheck size={24} className="text-amber-600 group-hover:text-emerald-950 transition-colors" />
             <span>Hemen Randevu Oluştur</span>
           </Link>
        </div>
      </section>

      {/* 3. ÜRÜNLER (BUTİK ÜRÜNLER DÜZENLENDİ) */}
      <section id="ürünler" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-950 mb-3">Ürünler</h2>
            <p className="text-stone-500">Organizasyonunuzu tamamlayan zarif dokunuşlar.</p>
          </div>

     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "İsteme Çikolatası", sub: "Kişiye Özel", icon: <Gift /> },
              { title: "İsteme Çiçeği", sub: "Buket", icon: <Heart /> },
              { title: "Hediyelikler", sub: "Magnet & Kolonya", icon: <Star /> },
              { title: "Helyum Balon", sub: "Uçan Balonlar", icon: <Gift /> },
            ].map((item, i) => (
              /* Link yerine div kullanıldı, tıklama iptal edildi ama tasarım korundu */
              <div 
                key={i} 
                className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all text-center group cursor-default"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-800 mx-auto mb-5 group-hover:bg-emerald-900 group-hover:text-amber-400 transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-serif text-lg text-emerald-950 mb-1">{item.title}</h4>
                <p className="text-stone-400 text-xs uppercase tracking-wide">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. İLETİŞİM & HARİTA */}
      <section id="iletisim" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-emerald-950 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
             
             {/* Sol: İletişim Bilgileri */}
             <div className="p-10 md:p-16 md:w-1/2 flex flex-col justify-center text-white relative">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="relative z-10">
                 <h2 className="text-3xl md:text-5xl font-serif mb-6">Bize Ulaşın</h2>
                 <p className="text-emerald-200/80 mb-10 text-lg leading-relaxed">
                   Trabzon'un en özel davet evi Nasip61'e ulaşmak çok kolay. Randevu alarak veya direkt arayarak bilgi alabilirsiniz.
                 </p>
                 
                 <div className="space-y-6">
                   <a href="https://wa.me/905309958244" className="flex items-center gap-4 text-xl font-medium hover:text-amber-400 transition-colors">
                     <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><Phone size={20}/></div>
                     0530 995 82 44
                   </a>
                   <a href="https://www.instagram.com/nasip61organizasyon/" className="flex items-center gap-4 text-xl font-medium hover:text-amber-400 transition-colors">
                     <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><Instagram size={20}/></div>
                     @nasip61organizasyon
                   </a>
                   <div className="flex items-center gap-4 text-lg font-medium text-emerald-100">
                     <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0"><MapPin size={20}/></div>
                     <span>Söğütlü, Fatih Sultan Mehmet Cd. No:1, Akçaabat/Trabzon</span>
                   </div>
                 </div>
               </div>
             </div>

             {/* Sağ: GOOGLE MAPS IFRAME */}
             <div className="md:w-1/2 h-[400px] md:h-auto bg-stone-200 relative">
               <iframe 
                 src="https://maps.google.com/maps?q=Söğütlü,+Fatih+Sultan+Mehmet+Cd.+No:1,+61300+Akçaabat/Trabzon&t=&z=15&ie=UTF8&iwloc=&output=embed"
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="grayscale hover:grayscale-0 transition-all duration-700"
               ></iframe>
               <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 text-sm font-bold text-emerald-950">
                 <MapPin size={16} className="text-amber-600" /> Nasip61 Konum
               </div>
             </div>

          </div>
          
          <div className="text-center mt-12 text-stone-400 text-xs flex flex-col md:flex-row items-center justify-center gap-4">
            <span>© 2026 Nasip61 Organizasyon. Tüm hakları saklıdır.</span>
          </div>
        </div>
      </section>
    </main>
  );
}