module.exports = {
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@storybook/react-native': '@storybook/react',
      'react-native$': 'react-native-web',
      'react-native-svg': 'react-native-svg/lib/commonjs/ReactNativeSVG.web',
    };

    config.module.rules[0].use[0].options.plugins.push(['react-native-web', { commonjs: true }]);

    config.module.rules[3] = {
      test: /\.(gif|jpe?g|png|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    };


    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            configFile: require.resolve('./tsconfig.web.json'),
            transpileOnly: true,
          },
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');

    console.dir(config, { depth: null });

    return config;
  },
};
