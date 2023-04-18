module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? { properties: ['^data-testid$'] } : false,
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_API_MOCKING: 'enabled',
  },
};
