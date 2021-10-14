const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@comp": path.resolve(__dirname, "src/components/index.ts"),
      "@routes": path.resolve(__dirname, "src/routes/index.ts"),
      "@core": path.resolve(__dirname, "src/core/index.ts"),
    },
  };

  return config;
};
