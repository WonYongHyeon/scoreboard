/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cafeptthumb-phinf.pstatic.net", // image URL hostname
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
