/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.simpleicons.org' }],
  },
}

module.exports = nextConfig
