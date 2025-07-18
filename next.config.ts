import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  trailingSlash: true, 
  basePath: "/site_dev",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
  // Uncomment if using Turbopack
  // transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
