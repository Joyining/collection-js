module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	overrides: [
		{
			files: [
				'src/**/*.ts',
				'src/**/*.tsx',
			],
			extends: [
				'airbnb-typescript/base',
				'plugin:import/recommended',
			],
			parserOptions: {
				project: [
					'./tsconfig.json',
				],
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint'
	],
	rules: {
	},
};