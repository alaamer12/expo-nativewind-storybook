import React from "react"
import { View } from "react-native"
import { Rouneded } from "./Rounded"


const RounedMeta = {
	title: "Rouned",
	component: Rouneded,
	argTypes: {
		onPress: { action: "pressed the button" },
		onmouseenter: { action: "onmouseenter" },
		onmouseleave: { action: "onmouseleave" },
	},
	args: {
		text: "Hello world Rouneded",
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
