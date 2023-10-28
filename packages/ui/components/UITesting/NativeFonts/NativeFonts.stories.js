import React from "react"
import { View } from "react-native"
import { NativeFonts } from "./NativeFonts"
import { withPerformance } from "storybook-addon-performance"

const NativeFontsMeta = {
	title: "UITESTING/NativeFonts",
	component: NativeFonts,
	argTypes: {
	
	},
	args: {
		text: "Hello world NativeFonts",
	},
	decorators: [
		(Story) => (
			<View style={{ alignItems: "center", justifyContent: "center", flex: 1, }}>
				<Story />
			</View>
		),
		withPerformance
	],
}

export default NativeFontsMeta

export const Basic = {}
