import React from "react"
import { View } from "react-native"
import { Font } from "./Font"
import { withPerformance } from "storybook-addon-performance"

const FontMeta = {
	title: "UITESTING/Font",
	component: Font,
	argTypes: {
		onPress: { action: "pressed the button" },
		onmouseenter: { action: "onmouseenter" },
		onmouseleave: { action: "onmouseleave" },
	},
	args: {
		text: "Hello world Font",
	},
	decorators: [
		(Story) => (
			<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
				<Story />
			</View>
		),
		withPerformance
	],
}

export default FontMeta

export const Basic = {}

export const AnotherRounded = {
	args: {
		text: "Another example",
	},
}
