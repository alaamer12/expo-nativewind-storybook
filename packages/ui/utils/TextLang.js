// TextLang.js

import React from "react"
import MyText from "../components/TealimText/MyText"
import useTranslation from "../hooks/useTranslation"

const TextLang = ({ children, ...props }) => {
	const { language } = useTranslation()

	return (
		<MyText {...props}>
			{React.Children.map(children, child =>
				React.cloneElement(child, { children: language[child.props.id] })
			)}
		</MyText>
	)
}

export default TextLang
