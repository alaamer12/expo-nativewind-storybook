import React from "react"
import { View } from "react-native"
import { Light } from "./Light"

const LightMeta = {
	title: "Light",
	component: Light,
	argTypes: {
		onPress: { action: "pressed the button" },
	},
	args: {
		text: "Hello world Light",
	},
	decorators: [
		(Story) => (
			<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
				<Story />
			</View>
		),
	],
}

export default LightMeta

export const Basic = {}

export const AnotherLight = {
	args: {
		text: "Another example Light",
	},
}
