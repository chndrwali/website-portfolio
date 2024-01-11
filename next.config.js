/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "gist.githubusercontent.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
