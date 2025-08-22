/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/HOTELES-ROSAS',
  assetPrefix: '/HOTELES-ROSAS/',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
