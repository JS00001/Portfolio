/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {},
        },
      ],
    })
    return config
  },
}
