/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/love',
        destination: '/love/index.html',
      },
    ];
  },
};

export default nextConfig;
