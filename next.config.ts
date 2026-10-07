import type { NextConfig } from "next";
import { headers } from "next/headers";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
