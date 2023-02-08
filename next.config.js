/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = {
webpack: (config, { isServer }) => {
  if (isServer) {
    require('./scripts/cache')
  }

  return config
},
}
