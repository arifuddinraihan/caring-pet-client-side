/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env : {
    LOCAL_SERVER_URL : process.env.LOCAL_URL
  }
};

export default nextConfig;
