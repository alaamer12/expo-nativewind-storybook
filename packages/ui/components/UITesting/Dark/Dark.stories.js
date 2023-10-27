import React from "react"
import { View } from "react-native"
import { Dark } from "./Dark"

const DarkMeta = {
	title: "UITESTING/Dark",
	component: Dark,
	argTypes: {
		onPress: { action: "pressed the button" },
	},
	args: {
		text: "Hello world DarkMeta",
	},
	decorators: [
		(Story) => (
			<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
				<Story />
			</View>
		),
	],
}

export default DarkMeta

export const Basic = {}

export const AnotherDark = {
	args: {
		text: "Another example DarkMeta",
	},
}
