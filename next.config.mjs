/** @type {import('next').NextConfig} */
const nextConfig = {};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    experimental: {
      optimizePackageImports: ["@chakra-ui/react"],
    },
  }
