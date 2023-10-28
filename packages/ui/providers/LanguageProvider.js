import React from "react"
import { createContext } from "react"
import { useState } from "react"

export const LanguageContext  = createContext("en")
const LanguageProvider = ({children}) => {

	const [language, setLanguage] = useState("en")


	const changeLanguage = () => {
		if (language === "ar")
			setLanguage("en")
		else
			setLanguage("ar")
	}

	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}

export default LanguageProvider