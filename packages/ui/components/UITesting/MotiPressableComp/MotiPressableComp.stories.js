import React from "react"
import { View } from "react-native"
import { MotiPressableComp } from "./MotiPressableComp"

const MotiPressableCompMeta = {
	title: "UITESTING/MotiPressableComp",
	component: MotiPressableComp,
	argTypes: {
		onPress: { action: "pressed the button" },
	},
	args: {
		text: "Hello world MotiPressableComp",
	},
	decorators: [
		(Story) => (
			<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
				<Story />
			</View>
		),
	],
}

export default MotiPressableCompMeta

export const Basic = {}

export const AnotherRounded = {
	args: {
		text: "Another example",
	},
}
