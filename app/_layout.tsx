import FontAwesome from "@expo/vector-icons/FontAwesome"
import LanguageProvider from "../packages/ui/providers/LanguageProvider"
import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"
import { useEffect } from "react"

import "./styles.css"
import { NativeWindStyleSheet } from "nativewind"

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router"

NativeWindStyleSheet.setOutput({
	default: "native",
})

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded, error] = useFonts({
		...FontAwesome.font,
	})

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error
	}, [error])

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return <RootLayoutNav />
}

function RootLayoutNav() {


	return (
		<LanguageProvider>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="modal" options={{ presentation: "modal" }} />
			</Stack>
		</LanguageProvider>
	)
}
