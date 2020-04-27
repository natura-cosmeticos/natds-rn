module.exports = {
  webpackFinal: (config) => {
    const newConfig = { ...config };
    newConfig.module.rules[0].use[0].options.plugins.push(['@babel/plugin-proposal-optional-chaining']);

    newConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            configFile: require.resolve('../tsconfig.json'),
            transpileOnly: true,
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    newConfig.resolve.extensions.push('.ts', '.tsx');

    // console.dir(newConfig, { depth: null });

    return newConfig;
  },
};
