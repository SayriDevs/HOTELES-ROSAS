/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // Configuración para Next.js que genera un sitio estático
  output: 'export',
  // La base de la URL y el prefijo de assets solo se aplican en producción (para GitHub Pages)
  basePath: isProd ? '/HOTELES-ROSAS' : undefined,
  assetPrefix: isProd ? 'https://sayridevs.github.io/HOTELES-ROSAS' : undefined,
  trailingSlash: true, // Opcional, pero recomendado para algunas rutas

  // Configuraciones que ya tenías
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
