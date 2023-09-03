/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com'
      },
      { protocol: 'http', hostname: 'localhost' }
    ],
  },
  env: {
    host: 'http://localhost:3000',
  }
};

module.exports = nextConfig;
