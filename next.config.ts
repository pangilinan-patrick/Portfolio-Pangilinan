import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ─── Turbopack (top-level in 16, replaces the old webpack() function) ───
  turbopack: {
    rules: {
      // SVGs as React components (replaces @svgr/webpack in webpack config)
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
      // MDX support
      '*.mdx': {
        loaders: ['@mdx-js/loader'],
        as: '*.js',
      },
    },
    resolveAlias: {
      // Monorepo / path aliases (keep in sync with tsconfig paths)
      '@components': './src/components',
      '@lib': './src/lib',
    },
  },

  // ─── Image configuration ───
  images: {
    // Local images with query strings (breaking change in 16)
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '?v=1',       // specific value
        // or omit `search` to allow any query string
        // or set search: '' to disallow query strings
      },
    ],

    // Remote image hosts
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.example.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
    ],

    // Quality levels to generate (16 default is [75] only)
    qualities: [50, 75, 100],

    // Cache TTL in seconds (16 default is 14400 = 4h)
    minimumCacheTTL: 86400,

    // If serving from a local IP (dev only)
    // dangerouslyAllowLocalIP: true,
  },

  // ─── Other common options ───
  output: 'standalone',
  transpilePackages: ['@company/ui'],
  reactStrictMode: true,
}

export default nextConfig   