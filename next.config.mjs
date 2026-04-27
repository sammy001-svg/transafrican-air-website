/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Security: Disable powered by header to reduce information disclosure
  poweredByHeader: false,
  // Production optimizations: disable source maps in production
  productionBrowserSourceMaps: false,
  // Enable compression
  compress: true,
}

export default nextConfig
