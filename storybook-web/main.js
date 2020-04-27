module.exports = {
  presets: ['@storybook/addon-docs/preset'],
  stories: [
    '../lib/**/*.stories.(js|mdx)',
  ],
  webpackFinal: (config) => {
    const newConfig = { ...config };

    newConfig.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@storybook/react-native': '@storybook/react',
      'react-native$': 'react-native-web',
      'react-native-svg': 'react-native-svg/lib/commonjs/ReactNativeSVG.web',
    };

    newConfig.module.rules[0].use[0].options.plugins.push(['@babel/plugin-proposal-optional-chaining']);
    newConfig.module.rules[0].use[0].options.plugins.push(['react-native-web', { commonjs: true }]);

    newConfig.module.rules[7] = {
      test: /\.(gif|jpe?g|png|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    };

    newConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            configFile: require.resolve('./tsconfig.web.json'),
            transpileOnly: true,
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    newConfig.resolve.extensions.push('.ts', '.tsx', '.mdx');

    // console.dir(newConfig, { depth: null });

    return newConfig;
  },
};
