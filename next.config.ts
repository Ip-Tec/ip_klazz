import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output 'export' only if NOT on Vercel
  output: process.env.VERCEL || process.env.NEXT_PUBLIC_VERCEL_URL ? undefined : "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // swcMinify: true,
  // other config options...
};

export default nextConfig;
