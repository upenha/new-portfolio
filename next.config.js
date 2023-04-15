/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.icon-icons.com'],
  },
}

module.exports = nextConfig
