/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/appointment',
        destination: '/appointment.html',
      },
    ];
  },
};

module.exports = nextConfig;