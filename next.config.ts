import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // This allows the build to succeed even if there are ESLint warnings/errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This allows the build to succeed even if there are TypeScript errors
    ignoreBuildErrors: true,
  },
  // If you are using images from external domains, you might need this:
  images: {
    unoptimized: true, // Recommended for Cloudflare Workers/Pages if not using a specific loader
  },
};

export default nextConfig;