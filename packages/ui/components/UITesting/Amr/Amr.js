import { View, Text } from "react-native"
import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import {  Pressable } from "react-native"
import { useMemo, useCallback } from "react"
import { MotiPressable } from "moti/interactions"
import { Button } from "@react-native-material/core"
export const Amr = () => {
	return (
		<View>
			<MotiPressable
				style={styles.container}
				onPress={() => console.log("onPress")}
				animate={({ hovered, pressed }) => {
					"worklet"
    
					return {
						opacity: hovered || pressed ? 0.5 : 1,
					}
				}}
			/>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		width: 200,
		height: 200,
		margin: 10,
		paddingVertical: 8,
		backgroundColor: "#660080",
		borderRadius: 8,
	},
	text: { color: "white" },
})
