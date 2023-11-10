/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'i.pravatar.cc'
      },
      {
        hostname: 'images.unsplash.com'
      }
    ]
  }
};

module.exports = nextConfig;
