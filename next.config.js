/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' to allow API routes and dynamic features
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Optimize for Netlify deployment
  experimental: {
    outputFileTracingRoot: undefined,
  }
}

module.exports = nextConfig
