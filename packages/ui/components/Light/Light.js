import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

export const Light = ({ onPress, text }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: "8%",
		paddingVertical: 8,
		backgroundColor: "gray",
		borderRadius: 9999,
	},
	text: { color: "black" },
})
