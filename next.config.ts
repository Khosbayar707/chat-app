import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/conversation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
