/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["spoonacular.com"],
  },
};

module.exports = nextConfig;
