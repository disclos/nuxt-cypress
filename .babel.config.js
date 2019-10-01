module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-env'];
  const plugins = ['transform-class-properties', 'istanbul']

  return {
    presets,
    plugins
  };
}
