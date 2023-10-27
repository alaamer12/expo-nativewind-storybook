module.exports = {
  stories: [
    './stories/**/*.stories.?(ts|tsx|js|jsx)',
    '../packages/**/*.stories.(ts|tsx|js|jsx)',
    '../packages/**/*.story.?(ts|tsx|js|jsx)',
],
  addons: [
  '@storybook/addon-ondevice-controls', 
  '@storybook/addon-ondevice-actions',
  '@storybook/addon-ondevice-backgrounds',
  '@storybook/addon-ondevice-notes'
],
core: {
  builder: "webpack5",
},
framework: '@storybook/react',
// Add the following webpackFinal configuration
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
