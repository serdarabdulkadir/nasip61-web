import ServiceDetailClient from './client';

// Hostinger (Static Export) için hangi sayfaların üretileceğini burada belirtiyoruz
export async function generateStaticParams() {
  return [
    { slug: 'davet-evi' },
    { slug: 'nisan-soz' },
    { slug: 'acilis' },
    { slug: 'kina-gecesi' },
    { slug: 'dogum-gunu' },
    { slug: 'dini' }, // Veri setindeki isimle aynı olmalı
  ];
}

// Sayfa Bileşeni (Server Component)
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  // Next.js 15+ için params bir Promise'dir, await ile çözümlüyoruz
  const { slug } = await params;

  // Tüm işi Client Component'e devrediyoruz
  return <ServiceDetailClient slug={slug} />;
}