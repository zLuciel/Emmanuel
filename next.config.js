/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['i.pinimg.com', 'pa1.narvii.com', 'media.tenor.com', 'i.gifer.com'],
  },
};

const withTM = require('next-transpile-modules')(['gsap']);

module.exports = withTM(nextConfig);

