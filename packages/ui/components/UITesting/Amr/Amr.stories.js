import React from "react"
import { View } from "react-native"
import { Amr } from "./Amr"

const RounedMeta = {
	title: "UITESTING/Amr",
	component: Amr,
	argTypes: {
		onPress: { action: "pressed the button" },
	},
	args: {
		text: "Hello world Amr",
	},
	decorators: [
		(Story) => (
			<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
				<Story />
			</View>
		),
	],
}

export default RounedMeta

export const Basic = {}

export const AnotherRounded = {
	args: {
		text: "Another example",
	},
}
