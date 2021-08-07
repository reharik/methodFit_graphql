module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: [
		"react-app",
		"react-app/jest",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 12,
	},
	plugins: ["@typescript-eslint", "prettier"],
	rules: {
		"@typescript-eslint/triple-slash-reference": 0,
	},
	ignorePatterns: ["generated"],
};
