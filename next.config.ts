import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sujeitoprogramador.com",
      },
    ],
  },
  distDir: './.next',
  webpack: (config) => {
    return {
      ...config,
      // Aumente o tempo máximo permitido para uma única construção
      watchOptions: {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      },
    };
  },
};

export default nextConfig;
