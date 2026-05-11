import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // This explicitly allows your local network IP to access the dev server
  // without Next.js blocking the Hot Module Replacement (HMR) requests.
  allowedDevOrigins: ['10.61.2.33'],
};

export default nextConfig;
