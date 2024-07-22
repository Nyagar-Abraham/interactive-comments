import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'p-blue': 'hsl(238, 40%, 52%)',
				'p-red': 'hsl(358, 79%, 66%)',
				'p-g-blue': 'hsl(239, 57%, 85%)',
				'p-p-red': 'hsl(357, 100%, 86%)',
				'd-blue': 'hsl(212, 24%, 26%)',
				'g-blue': 'hsl(211, 10%, 45%)',
				'l-gray': 'hsl(223, 19%, 93%)',
				'v-l-gray': 'hsl(228, 33%, 97%)',
			},
		},
	},
	plugins: [],
};
export default config;

// - Dark blue: hsl(212, 24%, 26%)
// - Grayish Blue: hsl(211, 10%, 45%)
// - Light gray: hsl(223, 19%, 93%)
// - Very light gray: hsl(228, 33%, 97%)
// - White: hsl(0, 0%, 100%)

// - Moderate blue: hsl(238, 40%, 52%)
// - Soft Red: hsl(358, 79%, 66%)
// - Light grayish blue: hsl(239, 57%, 85%)
// - Pale red: hsl(357, 100%, 86%)

// ### Neutral
