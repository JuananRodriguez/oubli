var path = require("path");

module.exports = {
  stories: [
    "../src/Atoms/**/*.stories.*",
    "../src/Molecules/**/*.stories.*",
    "../src/Organisms/**/*.stories.*",
  ],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  features: {
    //As your Storybook grows in size, it gets challenging to load all of
    //your stories in a performant way, slowing down the loading times and yielding a large bundle.
    //You can optimize your story loading by enabling the storyStoreV7 feature flag as true
    storyStoreV7: true,
  },
};
