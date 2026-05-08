import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  /* config options here */
  output: isVercel ? undefined : "export",
  basePath: "",
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;
