module.exports = {
  stories: ['../storybook/stories/index.js'],

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
      // make sure we're rendering output using **web** Storybook not react-native
      '@storybook/react-native': '@storybook/react',
      // plugin-level react-native-web extensions
      'react-native-svg': 'react-native-svg/lib/commonjs/ReactNativeSVG.web',
      // ...
    };
    // config.module.rules.push({
    //   test: /\.(gif|jpe?g|png|svg)$/,
    //   use: {
    //     loader: 'url-loader',
    //     options: {
    //       name: '[name].[ext]',
    //     },
    //   },
    // });
    // mutate babel-loader
    config.module.rules[0].use[0].options.plugins.push(['react-native-web', { commonjs: true }]);
    // config.module.rules[3] = {
    //   test: /\.(gif|jpe?g|png|svg)$/,
    //   use: {
    //     loader: 'url-loader',
    //     options: {
    //       name: '[name].[ext]',
    //     },
    //   },
    // }

    // config.resolve.extensions.concat(['.web.js', '.js', '.json', '.web.jsx', '.jsx']);

    // console.dir(config, { depth: null });
    return config;
  },
};
