import React from "react"
import { View } from "react-native"
import { TouchableOpacity, Text, StyleSheet, Pressable } from "react-native"
import { Platform, Dimensions } from "react-native"


const WIDTH = Dimensions.get("window").width
export const WebFonts = ({ onPress, text, onmouseenter, onmouseleave }) => {

	console.log(process.env.STORYBOOK_WEB_ENABLED)
	if (process.env.STORYBOOK_WEB_ENABLED) {
		return (
			<View >
				<Text style={{ fontSize: 50, }} >************************** sans serif</Text>
				<Text style={{ fontSize: 50, }} >normal: wheres brown fox jumps</Text>
				<Text style={{ fontSize: 50, fontFamily: "helvetica" }} >helvetica: wheres brown fox jumps</Text>
				<Text style={{ fontSize: 50, fontFamily: "arial" }} >Arial: wheres brown fox jumps</Text>
				<Text style={{ fontSize: 50, fontFamily: "verdana" }} >Verdana: wheres brown fox jumps</Text>
				<Text style={{ fontSize: 50, fontFamily: "Tahoma" }} >Tahoma : wheres brown fox jumps</Text>
				<Text style={{ fontSize: 50, fontFamily: "trebuchet MS" }} >Trebuchet MS: wheres brown fox jumps</Text>
				<Text></Text>
				<Text style={{ fontSize: 50, fontFamily: "basis" }} >******************** serif</Text>
				<Text style={{ fontSize: 50, fontFamily: "Times New Roman" }} >Times New Roman: wheres brown fox jumps</Text>
				<Text style={{ fontSize: 50, fontFamily: "basis" }} >basis: wheres brown fox jumps</Text>
				<Text style={{ fontSize: 50, fontFamily: "Georgia" }} >Georgia : wheres brown fox jumps</Text>
				<Text style={{ fontSize: 50, fontFamily: "Garamond " }} >Garamond : wheres brown fox jumps</Text>
				<Text></Text>
				<Text style={{ fontSize: 50, fontFamily: "Courier New" }} >****************** monospace</Text>
				<Text style={{ fontSize: 50, fontFamily: "Courier New" }} >Courier New: wheres brown fox jumps</Text>
				<Text></Text>
				<Text style={{ fontSize: 50, fontFamily: "Courier New" }} >************ cursive</Text>
				<Text style={{ fontSize: 50, fontFamily: "Brush Script MT" }} >Brush Script MT: wheres brown fox jumps</Text>
			</View>
		)
	}
	else {
		return (
			<View style={styles.container}>
				<Text style={styles.text}> Please see the Native fonts </Text>
			</View>
		)
	}
	
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: "blue",
		borderRadius: 9999,
	},
	text: { color: "white", fontWeight: "900", letterSpacing: 2, fontSize: 20 },
})
