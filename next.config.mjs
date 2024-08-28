/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prtimes.jp',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prcdn.freetls.fastly.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;