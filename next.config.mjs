/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:'export',
  images: { unoptimized: true },
  basePath: '/al-imran-umrah',
  assetPrefix: '/al-imran-umrah',
  images: {
    loader: "akamai",
    path: "/",
  },
};

export default nextConfig;
