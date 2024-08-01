// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
//   });
  
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: "export",
    basePath: "/Course-Cloud",
    images: {
      unoptimized: true,
    },
  };
  
  // module.exports = withBundleAnalyzer(nextConfig);
  