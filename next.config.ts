import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    compress: true,
    productionBrowserSourceMaps: false,
    cacheComponents: true,
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "31.97.183.47",
                port: "9000",
            },
            {
                protocol: "https",
                hostname: "storage.preciznapoljoprivreda.rs",
            },
        ],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    experimental: {
        optimizePackageImports: ['lucide-react']
    },
};

export default nextConfig;
