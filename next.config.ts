import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: produces an `out/` folder you can host anywhere
  // (GitHub Pages, Netlify, Vercel, Cloudflare Pages).
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
