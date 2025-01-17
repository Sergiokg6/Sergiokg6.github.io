/** @type {import('next').NextConfig} */
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  assetPrefix: isProd ? './' : '',
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
