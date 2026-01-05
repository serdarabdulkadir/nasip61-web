import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // BU SATIR OLMADAN YEREL FOTOĞRAFLAR ÇALIŞMAZ
  },
};

export default nextConfig;