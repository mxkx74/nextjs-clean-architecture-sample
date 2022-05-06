module.exports = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
    reactRemoveProperties: true,
    removeConsole: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_API_MOCKING: 'enabled',
  },
};
