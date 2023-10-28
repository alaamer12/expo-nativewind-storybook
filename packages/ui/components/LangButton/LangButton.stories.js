import React from "react"
import { View } from "react-native"
import { LangButton } from "./LangButton"

const LangButtonMeta = {
	title: "LangButton",
	component: LangButton,
	argTypes: {
		onPress: { action: "pressed the button" },
	},
	args: {
		text: "Hello world LangButtonMeta",
	},
	decorators: [
		(Story) => (
			<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
				<Story />
			</View>
		),
	],
}

export default LangButtonMeta

export const Basic = {}

