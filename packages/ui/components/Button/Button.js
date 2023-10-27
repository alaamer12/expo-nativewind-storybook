
import React from "react"
import {StyleSheet, View, Text, TouchableOpacity} from "react-native"

const Button = (props) => {
	return (
		<TouchableOpacity style={styles.container}>
			<Text style={styles.text} >Ex culpa pariatur Lorem exercitation duis sint magna est est ut sint minim. Enim veniam excepteur occaecat eu quis. Sint ex ex Lorem deserunt nostrud do in. Pariatur aliqua culpa nulla dolore exercitation consequat quis est mollit irure.</Text>
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

export default Button
