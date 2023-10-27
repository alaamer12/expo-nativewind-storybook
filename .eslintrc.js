module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended"
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}",
				"**/*.{js,jsx,cjs,mjs,ts,tsx}",
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"react/prop-types": "off",
		"no-unused-vars": "off",
		// 'indent': 'off',
		"react/react-in-jsx-scope": "off", // must `import react` in the file
		"no-undef": "off", // must `require` used for import packages
		"no-mixed-spaces-and-tabs": "off", // egg
		"react-native/no-color-literals": "off",  // will be removed later in completing the project
		"react-native/no-inline-styles": "off", // also this
		"react-native/no-unused-styles": "off",    // also this
		"react-native/no-raw-text": "off", // it has to render Text in its component whatever what
		"react-native/sort-styles": 0,// its warn for now
		"react-hooks/exhaustive-deps": 0,
		"react/no-unescaped-entities": "off",
		"@typescript-eslint/no-unused-vars": "off"
	}
}
