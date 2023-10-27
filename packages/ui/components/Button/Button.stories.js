
import React from "react"
import { storiesOf } from "@storybook/react-native"
import Button from "./Button"

const ButtonExample = () => <Button />

storiesOf("Button", module).add("Example", () => (
	<ButtonExample />
))
