/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Configure basePath and assetPrefix for GitHub Pages
  basePath: "/Sergiokg6.github.io", // Use your GitHub repo name here (replace if needed)
  assetPrefix: "/Sergiokg6.github.io/", // Ensure assets are correctly prefixed
  output: "export", // Ensure Next.js generates a static export
};

module.exports = nextConfig;
