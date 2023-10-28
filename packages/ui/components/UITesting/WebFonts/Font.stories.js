import React from "react"
import { View } from "react-native"
import { WebFonts } from "./WebFonts"
import { withPerformance } from "storybook-addon-performance"

const WebFontsMeta = {
	title: "UITESTING/WebFonts",
	component: WebFonts,
	argTypes: {
		onPress: { action: "pressed the button" },
		onmouseenter: { action: "onmouseenter" },
		onmouseleave: { action: "onmouseleave" },
	},
	args: {
		text: "Hello world WebFonts",
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

export default WebFontsMeta

export const Basic = {}

export const AnotherRounded = {
	args: {
		text: "Another example",
	},
}
