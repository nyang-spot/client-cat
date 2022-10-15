const { override, addWebpackAlias, useBabelRc } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@models': path.resolve(__dirname, 'src/models'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@apis': path.resolve(__dirname, 'src/apis'),
    '@assets':path.resolve(__dirname, 'src/assets'),
  }),
  useBabelRc(),
);