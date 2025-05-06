import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      new URL("http://localhost:1338/**"),
      new URL("https://strapi-admin-oqcp.onrender.com/**"),
      new URL("https://strapi-admin-wsao.onrender.com/**"),
    ],
  },
};
export default nextConfig;
