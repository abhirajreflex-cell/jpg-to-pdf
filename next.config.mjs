/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
 reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/jpg-to-pdf",
        permanent: false,
      },
    ];
  },



  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
