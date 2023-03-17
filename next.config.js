/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pgdheuegmnnmwmuouret.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
