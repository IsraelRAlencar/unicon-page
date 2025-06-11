import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' } // Allow all remote images for dev only!
    ]
  },
  allowedDevOrigins: ['http://172.27.128.1']
};

export default nextConfig;
