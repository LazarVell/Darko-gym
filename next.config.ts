import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Darko-gym",
  assetPrefix: "/Darko-gym/",
};

export default nextConfig;
