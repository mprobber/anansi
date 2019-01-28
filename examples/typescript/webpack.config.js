const { makeConfig } = require('@anansi/webpack-config');

const options = {
  basePath: 'src',
  buildDir: 'generated_assets/',
};

const generateConfig = makeConfig(options);

module.exports = (env, argv) => {
  const config = generateConfig(env, argv);
  if (config.optimization.splitChunks) {
    config.optimization.splitChunks.cacheGroups.router = {
      test: /[\\/]node_modules[\\/](react-router|react-router-dom|history|resolve-pathname|value-equal|path-to-regexp|scroll-behavior|react-router-scroll-4)[\\/].*/,
      name: 'router',
      chunks: 'all',
    };
  }
  return config;
};