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
      {
        protocol: 'https',
        hostname: 'complice.fra1.cdn.digitaloceanspaces.com',
      },
      { protocol: 'http', hostname: 'localhost' }
    ],
  },
  env: {
    host: 'http://localhost:3000',
  }
};

module.exports = nextConfig;
