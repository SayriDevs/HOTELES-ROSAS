/** @type {import('next').NextConfig} */

const repoName = 'HOTELES-ROSAS';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
