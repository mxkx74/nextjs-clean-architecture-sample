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
  // ポーリングの頻度を下げてdevサーバーの負荷を下げる
  webpack: (config) => {
    config.watchOptions = {
      poll: 5000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
