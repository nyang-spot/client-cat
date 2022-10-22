const path = require('path');
/** NOTICE: DocGenPluginDeprecationWarning이 뜹니다.
 * 왜뜨나요?
 * StoryBook 스토이북이 아직까지 TypeScript 4.8 버전을 지원하지 않는 것으로 확인됐습니다.
 * 참고
 * https://github.com/hipstersmoothie/react-docgen-typescript-plugin/issues/69
 */
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../src/components'),
      '@models': path.resolve(__dirname, '../src/models'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@apis': path.resolve(__dirname, '../src/apis'),
      '@assets': path.resolve(__dirname, '../src/assets'),
    };
    return config;
  },
};
