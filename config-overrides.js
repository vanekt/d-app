const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
  // Sass
  config = rewireCssModules(config, env);

  return config;
};
