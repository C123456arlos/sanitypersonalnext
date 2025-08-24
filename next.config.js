/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https', // or 'http' if applicable, but HTTPS is recommended
        hostname: 'cdn.sanity.io', // Replace with your image hostname
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
