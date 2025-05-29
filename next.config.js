/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' to allow API routes and dynamic features
  trailingSlash: true,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
