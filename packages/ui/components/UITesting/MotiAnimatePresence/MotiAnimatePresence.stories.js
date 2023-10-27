import React from "react"
import { View } from "react-native"
import { MotiAnimatePresence } from "./MotiAnimatePresence"

const MotiAnimatePresenceMeta = {
	title: "UITESTING/MotiAnimatePresence",
	component: MotiAnimatePresence,
	argTypes: {
		onPress: { action: "pressed the button" },
	},
	args: {
		text: "Hello world MotiAnimatePresence",
	},
	decorators: [
		(Story) => (
			<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
				<Story />
			</View>
		),
	],
}

export default MotiAnimatePresenceMeta

export const Basic = {}
