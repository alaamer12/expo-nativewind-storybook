import { addDecorator } from "@storybook/react";
import { View } from "react-native";
import LanguageProvider from "../packages/ui/providers/LanguageProvider";
addDecorator((story) => (
  <LanguageProvider >
    <View style={{ flex: 1, backgroundColor: 'hotpink' }}>
      {story()}
    </View>
    </LanguageProvider>
))
export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
