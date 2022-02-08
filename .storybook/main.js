var path = require("path");

module.exports = {
  stories: [
    "../src/Atoms/**/*.stories.@(js|md)",
    "../src/Molecules/**/*.stories.@(js|md)",
    "../src/Organisms/**/*.stories.@(js|md)",
  ],
  addons: ["@storybook/addon-a11y", "@storybook/addon-essentials"],
};
