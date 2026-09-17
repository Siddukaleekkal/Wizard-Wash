import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/g20-summit-trump-doral-powerwashing",
        destination: "/blog/gelati-celesti-virginia-powerwashing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
