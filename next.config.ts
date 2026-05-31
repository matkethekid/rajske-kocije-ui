import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    compress: true,
    productionBrowserSourceMaps: false,
    cacheComponents: true,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    experimental: {
        optimizePackageImports: ['lucide-react']
    },
};

export default nextConfig;
