/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // ⚡ Esto reemplaza next export
  trailingSlash: true,    // Para que GitHub Pages funcione correctamente
};

module.exports = nextConfig;