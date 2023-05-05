/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

const withTM = require('next-transpile-modules')(['gsap']);

module.exports = withTM(nextConfig);

