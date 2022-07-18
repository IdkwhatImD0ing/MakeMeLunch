/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    
    domains: ["spoonacular.com"],
  },

  experimental: {
    images: {
      unoptimized: true,
    },
};

module.exports = nextConfig;
