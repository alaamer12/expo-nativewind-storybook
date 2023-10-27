import React from "react"
import { TouchableOpacity, Text, StyleSheet, Pressable } from "react-native"

export const Rouneded = ({ onPress, text, onmouseenter, onmouseleave }) => {
	return (
		<Pressable onHoverIn={onmouseenter} onHoverOut={ onmouseleave} style={styles.container} onPress={onPress} activeOpacity={0.8}>
			<Text style={styles.text}>{text}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: "blue",
		borderRadius: 9999,
	},
	text: { color: "white" },
})
