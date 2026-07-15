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
    async redirects() {
      return [
        {
          source: "/pogrebne-usluge/zemun",
          destination: "/pogrebne-usluge/prevoz-pokojnika/zemun",
          permanent: true,
        },
        {
          source: "/pogrebne-usluge/novi-beograd",
          destination: "/pogrebne-usluge/prevoz-pokojnika/novi-beograd",
          permanent: true,
        },
        {
          source: "/pogrebne-usluge/dorcol",
          destination: "/pogrebne-usluge/prevoz-pokojnika/dorcol",
          permanent: true,
        },
        {
          source: "/pogrebne-usluge/vracar",
          destination: "/pogrebne-usluge/prevoz-pokojnika/vracar",
          permanent: true,
        },
        {
          source: "/pogrebne-usluge/cukarica",
          destination: "/pogrebne-usluge/prevoz-pokojnika/cukarica",
          permanent: true,
        },
      ]
    }
};

export default nextConfig;
