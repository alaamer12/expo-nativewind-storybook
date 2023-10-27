import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

export const Dark = ({ onPress, text }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
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
