/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const repoName = process.env.GITHUB_REPOSITORY_NAME || 'HOTELES-ROSAS';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: isProd ? `/${repoName}`: undefined,
  assetPrefix: isProd ? `/${repoName}/`: undefined,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
