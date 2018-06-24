const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.(css|scss)$/,
    loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });
  return storybookBaseConfig;
};
