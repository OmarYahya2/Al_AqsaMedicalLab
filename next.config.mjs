/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // أي طلب يبدأ بـ /api
        destination: "https://al-aqsabackend-uokt.onrender.com/:path*", // ضع هنا رابط backend على Render
      },
    ];
  },
};

export default nextConfig;
