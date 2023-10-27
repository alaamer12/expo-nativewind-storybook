/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-var-requires */

import React from "react"
import { Text, View, Platform } from "react-native"
import { TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const isWep = Platform.OS === "web"

const storybookEnabled =
 // process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true" &&
 // process.env.WEB_STORYBOOK_ENABLED === 'true' &&
 true

const Index = () => {
	return (
		<SafeAreaView>
			<Text className=" text-red-500 text-9xl">Hello world</Text>
			<Text className="bg-gradient-to-r from-violet-600 to-indigo-600 text-4xl text-green-400 bg-slate-600">
				prees me
			</Text>
			<Text className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
				Save Changes with Text Component
			</Text>
		</SafeAreaView>
	)
}

let EntryPoint = Index

if (storybookEnabled) {
	const StorybookUI = require("../.ondevice").default
	EntryPoint = () => {
		return (
			<View style={{ flex: 1 }}>
				<StorybookUI />
			</View>
		)
	}
}

export default EntryPoint
