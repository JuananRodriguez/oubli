var path = require("path");

module.exports = {
  stories: [
    "../src/Atoms/**/*.stories.@(js|md)",
    "../src/Molecules/**/*.stories.@(js|md)",
    "../src/Organisms/**/*.stories.@(js|md)",
  ],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  features: {
    //As your Storybook grows in size, it gets challenging to load all of
    //your stories in a performant way, slowing down the loading times and yielding a large bundle.
    //You can optimize your story loading by enabling the storyStoreV7 feature flag as true
    storyStoreV7: true,
  },
};
