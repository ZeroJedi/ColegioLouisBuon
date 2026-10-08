import type { NextConfig } from "next";

// Generate all IPs for the 192.168.2.X/24 subnet
const localSubnetOrigins = Array.from({ length: 254 }, (_, i) => `192.168.2.${i + 1}`);

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  allowedDevOrigins: [
    "solareshome.ddns.net",
    "solareshome.ddns.net:3000",
    ...localSubnetOrigins,
    ...localSubnetOrigins.map(ip => `${ip}:3000`),
  ],
};

export default nextConfig;
