/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para Next.js que genera un sitio estático
  output: 'export',
  // La base de la URL para que las rutas funcionen correctamente en GitHub Pages
  basePath: '/hoteles-rosas', // Asegúrate de que este sea el nombre de tu repositorio
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
