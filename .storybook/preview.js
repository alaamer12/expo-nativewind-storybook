import "../dist/styles/tailwind.css"
import "@storybook/addon-console"
import LanguageProvider from "../packages/ui/providers/LanguageProvider";
import { View } from "react-native";
import { addDecorator } from "@storybook/react";

addDecorator((story) => (
  <LanguageProvider>
    <View style={{ flex: 1, backgroundColor: 'hotpink' }}>
      {story()}
    </View>
    </LanguageProvider>
))
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
