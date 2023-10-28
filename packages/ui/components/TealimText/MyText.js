/**
 * MyText component for displaying text with various styles.
 * @param {object} props - Component props.
 * @param {boolean} [props.h1] - Indicates if the text should have a large heading style.
 * @param {boolean} [props.h2] - Indicates if the text should have a medium heading style.
 * @param {boolean} [props.h3] - Indicates if the text should have a small heading style.
 * @param {boolean} [props.h4] - Indicates if the text should have an extra small heading style.
 * @param {boolean} [props.h5] - Indicates if the text should have a tiny heading style.
 * @param {boolean} [props.title] - Indicates if the text should have a title style.
 * @param {boolean} [props.p] - Indicates if the text should have a paragraph style.
 * @param {boolean} [props.bold] - Indicates if the text should be bold.
 * @param {boolean} [props.black] - Indicates if the text should be in a black font.
 * @param {boolean} [props.it] - Indicates if the text should be in italic style.
 * @param {boolean} [props.rqaa] - Indicates if the text should use the 'Srisakdi-Bold' font.
 * @param {boolean} [props.header] - Indicates if the text should use the 'Raleway-ExtraBold' font.
 * @param {boolean} [props.header2] - Indicates if the text should use the 'ArchivoBlack' font.
 * @param {boolean} [props.header3] - Indicates if the text should use the 'Poppins-ExtraBold' font.
 * @param {boolean} [props.mainText] - Indicates if the text should use the 'Literata_60pt-ExtraBold' font.
 * @param {boolean} [props.mainText2] - Indicates if the text should use the 'PlayfairDisplay' font.
 * @param {boolean} [props.body] - Indicates if the text should use a serif font.
 * @param {boolean} [props.customized] - Indicates if the text should use the 'MontaguSlab-Bold' font.
 * @param {boolean} [props.logo] - Indicates if the text should use the 'BreeSerif' font.
 * @param {boolean} [props.header_ar] - Indicates if the text should use the 'Cairo' font for Arabic.
 * @param {boolean} [props.mainText_ar] - Indicates if the text should use the 'ElMessiri' font for Arabic.
 * @param {object} [props.style] - Additional styles to apply to the text component.
 * @returns {React.Component} MyText component.
 */

import { Text } from "@react-native-material/core"
import React, { useState, useEffect } from "react"
import { Text as UniversalText } from "react-native"

import { loadAsync } from "expo-font"

import { RFValue } from "react-native-responsive-fontsize"
import useTranslation from "../../hooks/useTranslation"
const MyText = ({ id = "DEFAULT" , joined, style, lazy,  ...props }) => {

	// Determine Language
	const { language } = useTranslation()

	const fontStyles = {
		// Sizes
		h1: { fontSize: RFValue(46) },
		h2: { fontSize: RFValue(36) },
		h3: { fontSize: RFValue(24) },
		h4: { fontSize: RFValue(20) },
		h5: { fontSize: RFValue(16) },
		h6: { fontSize: RFValue(14) },
		p: { fontSize: RFValue(12) },

		// Varient
		bold: { fontWeight: "bold" },
		black: { fontWeight: "900" },
		it: { fontStyle: "italic" },
		header: { fontFamily: "Raleway-ExtraBold", letterSpacing: 1 },
		header2: { fontFamily: "ArchivoBlack", letterSpacing: -3 },
		header3: { fontFamily: "Poppins-ExtraBold", letterSpacing: -1 },
		mainText: { fontFamily: "Literata_60pt-ExtraBold", letterSpacing: 1 },
		mainText2: { fontFamily: "PlayfairDisplay" },
		mainText3: { fontFamily: "Merriweather", letterSpacing: 2 },

		// Common
		body: { fontFamily: "serif", letterSpacing: -1 },
		customized: { fontFamily: "MontaguSlab-Bold", letterSpacing: 2 },
		logo: { fontFamily: "BreeSerif", letterSpacing: 1 },

		// Arabic
		rqaa: { fontFamily: "Srisakdi-Bold" },
		header_ar: { fontFamily: "Cairo" },
		mainText_ar: { fontFamily: "ElMessiri" },
	}

	const fontFamily = {
		// Header
		"Raleway-ExtraBold": require("./assets/Fonts/Raleway-ExtraBold.ttf"),
		ArchivoBlack: require("./assets/Fonts/ArchivoBlack-Regular.ttf"),
		"Poppins-ExtraBold": require("./assets/Fonts/Poppins-ExtraBold.ttf"),

		// MainText
		"Literata_60pt-ExtraBold": require("./assets/Fonts/Literata_60pt-ExtraBold.ttf"),
		PlayfairDisplay: require("./assets/Fonts/PlayfairDisplay-ExtraBoldItalic.ttf"),
		Merriweather: require("./assets/Fonts/Merriweather-Black.ttf"),

		// Common
		BreeSerif: require("./assets/Fonts/BreeSerif-Regular.ttf"),
		"MontaguSlab-Bold": require("./assets/Fonts/MontaguSlab_120pt-Bold.ttf"),

		// No
		AlfaSlabOne: require("./assets/Fonts/AlfaSlabOne-Regular.ttf"),
		"Oswald-Bold": require("./assets/Fonts/Oswald-Bold.ttf"),
		"CrimsonPro-ExtraBold": require("./assets/Fonts/CrimsonPro-ExtraBold.ttf"),
		NovaRound: require("./assets/Fonts/NovaRound-Regular.ttf"),
		"Srisakdi-Bold": require("./assets/Fonts/Srisakdi-Bold.ttf"),
		"Slabo27px-Regular": require("./assets/Fonts/Slabo27px-Regular.ttf"),

		// Arabic
		Changa: require("./assets/Fonts/Arabic/Changa-ExtraBold.ttf"),
		Cairo: require("./assets/Fonts/Arabic/Cairo-ExtraBold.ttf"),
		ElMessiri: require("./assets/Fonts/Arabic/ElMessiri-Bold.ttf"),
	}

	const [fontLoaded, setFontLoaded] = useState(false)

	useEffect(() => {
		async function loadFonts() {
			await loadAsync(fontFamily)
			setFontLoaded(true)
		}

		loadFonts()
	}, [])

	if (!fontLoaded) {
		return lazy ? <Text {...props}>{props.children}</Text> : null
	}

	const mergedStyles = Object.keys(props)
		.filter((prop) => fontStyles[prop])
		.map((prop) => fontStyles[prop])

	return (
		<UniversalText {...props} style={[...mergedStyles, style]}>
			{
				id !== null && id !== "DEFAULT"
					? language[id]
					: props.children}
		</UniversalText>
	)
}

export default React.memo(MyText)
