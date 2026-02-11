/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Update these values based on your GitHub repository name
  // If your repo is 'emdadat-alatta', use '/emdadat-alatta'
  // If your repo is username.github.io, use ''
  basePath: '/emdadat-alatta',
  assetPrefix: '/emdadat-alatta/',
  trailingSlash: true,
}

module.exports = nextConfig
