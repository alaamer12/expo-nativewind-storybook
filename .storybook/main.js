module.exports = {
  stories: [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
    // maybe the performance addon gives error
  ],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",

  webpackFinal: async (config, { configType }) => {
    // Resolve issues with Framer and Moti
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },

};
