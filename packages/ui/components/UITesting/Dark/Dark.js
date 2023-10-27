import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { MotiView } from "moti"
export const Dark = ({ onPress, text }) => {
	return (
		<MotiView
			style={{backgroundColor: "red", width: 300, height: 300,}}
      
			from={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "timing",loop: true }}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: "black",
		borderRadius: 9999,
	},
	text: { color: "white" },
})
