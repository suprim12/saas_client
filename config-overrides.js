const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@comp": path.resolve(__dirname, "src/components/index.ts"),
    },
  };

  return config;
};
