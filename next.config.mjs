/** @type {import('next').NextConfig} */

const forGhPages = process.env.FOR_GH_PAGES === 'true';
const repoName = 'HOTELES-ROSAS';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: forGhPages ? `/${repoName}`: undefined,
  assetPrefix: forGhPages ? `/${repoName}/`: undefined,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
