import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Button } from "@react-native-material/core"
import MyText from "../TealimText/MyText"

import useTranslation from "../../hooks/useTranslation"
export const LangButton = ({ onPress, text }) => {

	const { changeLanguage, language } = useTranslation()
	const handleLang = () => {
		changeLanguage
		console.log(language)
	}
	return (
		<>
			<TouchableOpacity style={styles.container} onPress={changeLanguage}>
				<MyText id="enjoyText"  />
			</TouchableOpacity>
			{/* <Button onPress={changeLanguage} title='press' /> */}
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: "#0d9c54",
		borderRadius: 9999,
	},
	text: { color: "white" },
})
