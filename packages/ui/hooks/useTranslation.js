// useTranslation.js

import { useContext } from "react"
import { LanguageContext } from "../providers/LanguageProvider"
import translations from "../common/translations"

const useTranslation = () => {
	const { language: region, changeLanguage } = useContext(LanguageContext)
	const language = translations[region]

	return { language, changeLanguage }
}

export default useTranslation
