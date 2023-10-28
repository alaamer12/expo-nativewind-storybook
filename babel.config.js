module.exports = function (api) {
	api.cache(true)
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			require.resolve("expo-router/babel"),
			require.resolve("nativewind/babel"),
			[
				"module-resolver",
				{
					alias: {
						// This needs to be mirrored in tsconfig.json
						// "@/src": "./src",
						"@/*": "../../*",
						"features/*": "./packages/features/*",
						"providers/*": "./packages/ui/providers/*",
						"utils/*": "./packages/ui/utils/*",
						"hooks/*": "./packages/ui/hooks/*",
						"components/*": "./packages/ui/components/*",
						"common/*": "./packages/ui/common/*",
					},
				},
			],
			require.resolve("@babel/plugin-transform-export-namespace-from"),
			require.resolve("react-native-reanimated/plugin"),
		],
	}
}
