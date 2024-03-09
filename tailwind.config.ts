import type { Config } from 'tailwindcss'
import twUiKit from './src/twUiKit/'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#34569d',
				},
				secondary: {
					DEFAULT: '#cead2d',
				},
				teal: {
					DEFAULT: '#00a6af',
				},
			},
		},
	},
	plugins: [
		twUiKit({
			'.tabs .tabs-content .tab-body': {
				padding: 0,
			},
		}),
	],
}
export default config
