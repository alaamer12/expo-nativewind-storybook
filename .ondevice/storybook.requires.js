/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./.ondevice/stories",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:\\.ondevice[\\\\/]stories(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
  {
    titlePrefix: "",
    directory: "./packages",
    files: "**/*.stories.@(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:packages(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(ts|tsx|js|jsx))$",
  },
  {
    titlePrefix: "",
    directory: "./packages",
    files: "**/*.story.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:packages(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.story\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-notes/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./packages/ui/components/Button/Button.stories.js": require("../packages/ui/components/Button/Button.stories.js"),
    "./packages/ui/components/Dark/Dark.stories.js": require("../packages/ui/components/Dark/Dark.stories.js"),
    "./packages/ui/components/Light/Light.stories.js": require("../packages/ui/components/Light/Light.stories.js"),
    "./packages/ui/components/Rounded/Rounded.stories.js": require("../packages/ui/components/Rounded/Rounded.stories.js"),
    "./packages/ui/components/UITesting/Amr/Amr.stories.js": require("../packages/ui/components/UITesting/Amr/Amr.stories.js"),
    "./packages/ui/components/UITesting/Button/Button.stories.js": require("../packages/ui/components/UITesting/Button/Button.stories.js"),
    "./packages/ui/components/UITesting/Dark/Dark.stories.js": require("../packages/ui/components/UITesting/Dark/Dark.stories.js"),
    "./packages/ui/components/UITesting/Font/Font.stories.js": require("../packages/ui/components/UITesting/Font/Font.stories.js"),
    "./packages/ui/components/UITesting/MotiAnimatePresence/MotiAnimatePresence.stories.js": require("../packages/ui/components/UITesting/MotiAnimatePresence/MotiAnimatePresence.stories.js"),
  };
};

configure(getStories, module, false);
