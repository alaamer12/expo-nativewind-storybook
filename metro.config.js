// Learn more https://docs.expo.io/guides/customizing-metro
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require("expo/metro-config")

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
	// [Web-only]: Enables CSS support in Metro.
	isCSSEnabled: true,
})


config.transformer.getTransformOptions = async () => ({
	transform: {
		experimentalImportSupport: true,
	},
})

// for storybook
config.resolver.resolverMainFields = [
	"sbmodern",
	...config.resolver.resolverMainFields,
]

// for moti
config.resolver.assetExts.push(
	// Adds support for framer-motion
	"mjs"
)


// for expo 49
config.resolver.assetExts.push(
	"cjs"
)

module.exports = config
