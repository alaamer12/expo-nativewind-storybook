import React from "react"
import { View } from "react-native"
import { MotiViewComp } from "./MotiViewComp"

const MotiViewCompMeta = {
	title: "UITESTING/MotiViewComp",
	component: MotiViewComp,
	argTypes: {
		onPress: { action: "pressed the button" },
	},
	args: {
		text: "Hello world MotiViewCompMeta",
	},
	decorators: [
		(Story) => (
			<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
				<Story />
			</View>
		),
	],
}

export default MotiViewCompMeta

export const Basic = {}

export const AnotherMotiViewComp = {
	args: {
		text: "Another example MotiViewCompMeta",
	},
}
