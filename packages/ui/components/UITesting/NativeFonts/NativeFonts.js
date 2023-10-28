import { View, ScrollView, Dimensions, Text } from "react-native"
import React from "react"
import MyText from "../../TealimText/MyText"
import { StyleSheet } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"


const { height } = Dimensions.get("window")
const lineHeight = height * 0.036 * 1.366

export const NativeFonts = () => {


	return (

		<View contentContainerStyle={styles.container}>
			{/* Existing components with normal text */}
			
			<MyText h1 id="goButton" style={styles.font1} />
			<MyText h2 >
	Header with normal
			</MyText>
			<MyText h2 style={{ fontFamily: "serif" }}>
	Header with serif
			</MyText>
			<MyText h2 style={styles.font1}>
	Header with PlayfairDisplay
			</MyText>
			<MyText h2 style={styles.font2}>
	Header with Merriweather
			</MyText>
			<MyText h2 style={styles.font3}>
	Header with Raleway-ExtraBold
			</MyText>
			<MyText h2 style={styles.font4}>
	Header with Srisakdi-Bold
			</MyText>
			<MyText h6 style={styles.font5}>
	Header with Slabo27px-Regular
			</MyText>
			<MyText h2 style={styles.font11}>
	Header with ArchivoBlack
			</MyText>
			<MyText h2 style={styles.font12}>
	Header with AlfaSlabOne-Regular
			</MyText>
			<MyText h2 style={styles.font13}>
	Header with Oswald
			</MyText>
			<MyText h2 style={styles.font6}>
	Header with Poppins-ExtraBold
			</MyText>
			<MyText h2 style={styles.font14}>
	tealim
			</MyText>
			<MyText h2 style={styles.font14}>
	header with NovaRound-Regular
			</MyText>
			<MyText h2 style={styles.font15}>
	header with CrimsonPro-Bold
			</MyText>
			<MyText h2 style={styles.font17}>
	header with Literata_60pt-ExtraBold
			</MyText>
			<MyText h2 style={styles.font7}>
	Header with MontaguSlab-Bold
			</MyText>
			<MyText h2 style={styles.font8}>
	هذا من وحي التجربة تشانجا
			</MyText>
			<MyText h2 style={styles.font9}>
	هذا من وحي التجربة القاهرة
			</MyText>
			<MyText h2 style={styles.font10}>
	هذا من وحي التجربة تشانجا المصيري
			</MyText>

			{/* New components with the same text in uppercase */}
			<MyText h2 style={styles.uppercaseFont}>
	HEADER WITH NORMAL
			</MyText>
			<MyText h2 style={[styles.font1, styles.uppercaseFont]}>
	HEADER WITH PLAYFAIRDISPLAY
			</MyText>
			<MyText h2 style={[styles.font2, styles.uppercaseFont]}>
	HEADER WITH MERRIWEATHER
			</MyText>
			<MyText h2 style={[styles.font3, styles.uppercaseFont]}>
	HEADER WITH RALEWAY-EXTRABOLD
			</MyText>
			<MyText h2 style={[styles.font4, styles.uppercaseFont]}>
	HEADER WITH SRISAKDI-BOLD
			</MyText>
			<MyText h2 style={[styles.font5, styles.uppercaseFont]}>
	HEADER WITH SLABO27PX-REGULAR
			</MyText>
			<MyText h2 style={[styles.font11, styles.uppercaseFont]}>
	HEADER WITH ARCHIVOBLACK
			</MyText>
			<MyText h2 style={[styles.font12, styles.uppercaseFont]}>
	HEADER WITH ALFASLABONE-REGULAR
			</MyText>
			<MyText h2 style={[styles.font13, styles.uppercaseFont]}>
	HEADER WITH OSWALD
			</MyText>
			<MyText h2 style={[styles.font14, styles.uppercaseFont]}>
	TEALIM
			</MyText>
			<MyText h2 style={[styles.font6, styles.uppercaseFont]}>
	HEADER WITH POPPINS-EXTRABOLD
			</MyText>
			<MyText h2 style={[styles.font15, styles.uppercaseFont]}>
	HEADER WITH NovaRound-Regular
			</MyText>
			<MyText h2 style={[styles.font16, styles.uppercaseFont]}>
	HEADER WITH CrimsonPro-Bold
			</MyText>
			<MyText h2 style={[styles.font7, styles.uppercaseFont]}>
	HEADER WITH MONTAGUSLAB-BOLD
			</MyText>
			<MyText h2 style={[styles.font17, styles.uppercaseFont]}>
	HEADER WITH Literata_60pt-Bold
			</MyText>
			<MyText h2 style={[styles.font8, styles.uppercaseFont]}>
	هذا من وحي التجربة تشانجا
			</MyText>
			<MyText h2 style={[styles.font9, styles.uppercaseFont]}>
	هذا من وحي التجربة القاهرة
			</MyText>
			<MyText h2 style={[styles.font10, styles.uppercaseFont]}>
	هذا من وحي التجربة تشانجا المصيري
			</MyText>
		</View>
	)
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	font1: {
		fontFamily: "PlayfairDisplay",
		fontWeight: "500",
		lineHeight: RFValue(lineHeight)
		// letterSpacing: RFValue(2)
	},
	font2: {
		fontFamily: "Merriweather",

	},
	font3: {
		fontFamily: "Raleway-ExtraBold",

	},
	font4: {
		fontFamily: "Srisakdi-Bold",

	},
	font5: {
		fontFamily: "Slabo27px-Regular",

	},
	font6: {
		fontFamily: "Poppins-ExtraBold",

	},
	font7: {
		fontFamily: "MontaguSlab-Bold",

	},
	font8: {
		fontFamily: "Changa",

	},
	font9: {
		fontFamily: "Cairo",

	},
	font10: {
		fontFamily: "ElMessiri",

	},
	font11: {
		fontFamily: "ArchivoBlack",

	},
	font12: {
		fontFamily: "AlfaSlabOne",

	},
	font13: {
		fontFamily: "Oswald-Bold",

	},
	uppercaseFont: {
		textTransform: "uppercase", // Convert text to uppercase
	},
	font14: {
		fontFamily: "BreeSerif",

	},
	font15: {
		fontFamily: "NovaRound",

	},
	font16: {
		fontFamily: "CrimsonPro-ExtraBold",

	},
	font17: {
		fontFamily: "Literata_60pt-ExtraBold",

	},
})


// for Bold header RaleWay [Captilize] , Archivo Black [uppercase], Poppins [Captilize] ,Merriweather
// BreeSerif for Logo
// Srisakdi-Bold for rqaa en
// Oswald no
// ElMessiri principle
// cairo header ar
// Literata_60pt-ExtraBold [captilize] main text
// taguslab bold customized
// playFair MainTxt
// Serif link and default
// mono space no
// slabo no
// novaRound ok
// AlfaSlabOne no
// CrimsonPro-Bold no
