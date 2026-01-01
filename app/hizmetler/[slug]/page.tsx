"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Phone, CalendarCheck, Star } from 'lucide-react';

// --- HİZMET VERİLERİ ---
// Resimlerin 'public' klasöründe olduğundan emin ol (Örn: public/Kına.png)
const serviceData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string; 
}> = {
  "davet-evi": {
    title: "Kız İsteme & Davet Evi",
    subtitle: "Ev Sıcaklığında, Protokol Stresinden Uzak",
    description: "En heyecanlı gününüzde, kahvenizin köpüğü kadar sohbetinizin tadı da yerinde olsun. Nasip61 Davet Evi; misafirlerinizi ağırlama telaşına düşmeden, sadece mutluluğunuza odaklanabileceğiniz nezih bir ortam sunar. İkramlardan sunuma, oturma düzeninden fotoğraf köşesine kadar her detay profesyonel ekibimiz tarafından yönetilir.",
    features: [
      "120 Kişilik Kapasite",
      "Kişiye Özel İkramlıklar & Çay Servisi",
      "Damat Fincanı Seremonisi",
      "Fotoğraf Çekim Alanı"
    ],
    // Buraya uygun bir resim ismi yazmalısın, şimdilik varsayılan koydum
    image: "/Kızisteme.png" 
  },
  "nisan-soz": {
    title: "Nişan & Söz Organizasyonu",
    subtitle: "Yüzükler Takılırken Göz Kamaştırın",
    description: "Söz ve nişan merasimleriniz için modern konseptler hazırlıyoruz. İster evinizin bahçesinde, ister bizim davet evimizde; hayalinizdeki tag kurulumunu ve masa düzenini gerçeğe dönüştürüyoruz. Makasın kurdeleyi kestiği o anı, en şık dekorasyonla ölümsüzleştiriyoruz.",
    features: [
      "Özel Tasarım Arka Fon (Tag)",
      "Nişan Tepsisi & Makas Süslemesi",
      "Jardinyer & Vazo Setleri",
      "Yapay Çiçek",
      "İsimli Karşılama Panosu",
      "Hediyelik Köşesi Kurulumu"
    ],
    image: "/Nasip.png"
  },
  "acilis": {
    title: "Açılış Organizasyonu",
    subtitle: "Yeni Başlangıçlara Görkemli Bir Adım",
    description: "İş yerinizin veya kurumunuzun açılışını unutulmaz kılın. Profesyonel bir açılış organizasyonu sunuyoruz. Markanızın prestijine yakışır bir başlangıç için yanınızdayız.",
    features: [
      "Zincir Balon Süsleme (Kapı Takı)",
      "Kokteyl Masası",
      "Açılış Makası & Tepsi",
    ],
    image: "/Açılış.png" // Buraya açılış ile ilgili resim varsa onu koyabilirsin
  },
  "kina-gecesi": {
    title: "Kına Gecesi",
    subtitle: "Hem Ağlarım Hem Giderim Diyenlere",
    description: "Kına tahtı, size özel konsept taglar ile unutulmaz bir kına gecesi organizasyonu.",
    features: [
      "Lüks Kına Tahtı & Cibinlik",
      "Kına Tepsisi & Sepeti",
      "Kuru Kına Dağıtımı"
    ],
    image: "/Kına.png"
  },
  "dogum-gunu": {
    title: "Doğum Günü",
    subtitle: "İyi ki Doğdun, İyi ki Varsın",
    description: "Kişiye özel belirlenen temaya uygun balon zincirleri, arka fonlar ve butik pasta masası hazırlıyoruz. Çocuğunuzun en sevdiği karakterlerle veya sizin belirlediğiniz renk paletiyle rüya gibi bir atmosfer oluşturuyoruz.",
    features: [
      "Kişiye Özel Konsept Tasarım",
      "Balon Zinciri & Süsleme",
      "Pasta Masası Dekoru",
      "Helyumlu Harf & Rakamlar"
    ],
    image: "/Dini.png" // Doğum günü resmi varsa burayı güncelle: "/DogumGunu.png" gibi
  },
    "dini": {
    title: "Hafızlık İcazet & Mevlüt",
    subtitle: "Manevi Atmosferin Huzurla Buluştuğu Anlar",
    description: "Hafızlık icazet merasimlerinden bebek mevlüdüne, iftar davetlerinden özel dini günlere kadar tüm manevi toplanmalarınızda yanınızdayız. İslami usullere uygun, Kur'an tilavetinin huşu içinde dinleneceği, misafirlerinizin en iyi şekilde ağırlanacağı nezih bir ortam hazırlıyoruz.",
    features: [
      "Kişiye Özel Konsept Tasarım",
      "Kürsü & Sahne Düzeni"
    ],
    image: "/Dini1.png" // Doğum günü resmi varsa burayı güncelle: "/DogumGunu.png" gibi
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-stone-50">
        <h1 className="text-3xl font-serif text-emerald-950 mb-4">Hizmet Bulunamadı</h1>
        <p className="text-stone-500 mb-6">Aradığınız sayfa mevcut değil veya kaldırılmış olabilir.</p>
        <Link href="/" className="px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors">
          Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-stone-50 min-h-screen pb-20">
      
      {/* HERO ALANI */}
      <div className="relative h-[50vh] bg-emerald-950 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-50">
           {/* Dinamik Resim */}
           <div 
             className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
             style={{ backgroundImage: `url('${service.image}')` }}
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/50 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in-up">
          <Link href="/#hizmetler" className="inline-flex items-center gap-2 text-white/80 hover:text-amber-400 mb-6 transition-colors text-sm uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <ArrowLeft size={16} /> Tüm Hizmetlere Dön
          </Link>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 shadow-sm">{service.title}</h1>
          <p className="text-amber-400 text-lg md:text-xl font-light italic">{service.subtitle}</p>
        </div>
      </div>

      {/* İÇERİK ALANI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-stone-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Sol: Açıklama */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full text-amber-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Star size={14} className="fill-amber-600" />
                Nasip61 Güvencesiyle
              </div>
              <h2 className="text-3xl font-serif text-emerald-950 mb-6">Detaylar</h2>
              <p className="text-stone-600 leading-loose text-lg mb-8">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/905309958244?text=Merhaba, ${service.title} hakkında fiyat almak istiyorum.`}
                  className="flex-1 bg-green-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 font-semibold hover:bg-green-700 transition-all shadow-lg shadow-green-600/20"
                >
                  <Phone size={20} />
                  WhatsApp Fiyat Al
                </a>
                <Link 
                  href="/randevu"
                  className="flex-1 border border-stone-300 text-stone-600 py-4 rounded-xl flex items-center justify-center gap-2 font-semibold hover:bg-stone-50 transition-all hover:border-amber-500 hover:text-amber-600"
                >
                  <CalendarCheck size={20} />
                  Randevu Oluştur
                </Link>
              </div>
            </div>

            {/* Sağ: Özellik Listesi */}
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 shadow-inner">
              <h3 className="text-xl font-serif text-emerald-900 mb-6 flex items-center gap-2">
                Paket İçeriği & Özellikler
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-stone-700">
                    <CheckCircle2 className="text-amber-500 w-6 h-6 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-stone-200">
                <p className="text-xs text-stone-500 italic">
                  * Paket içerikleri isteğinize göre kişiselleştirilebilir. Ekstra hizmetler için lütfen bilgi alınız.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}