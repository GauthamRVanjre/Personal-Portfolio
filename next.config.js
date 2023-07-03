const webpack = require("webpack");
module.exports = {
    future: {
      webpack5: true,
    },
    webpack: function (config, options) {
        // Should be webpack v5 now
      config.experiments = {};
      return config;
    },
};