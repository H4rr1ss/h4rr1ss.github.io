/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				txtBlue: '#5fd2fe',
				tbase: '#e8e8e8',
				secundary: '#7FD8FA',
				complement: '#FAC97F',
				borde: 'rgba(62, 74, 88, 0.5)',//3e4a58
				details: '#bbbaba',
				tag: '#390411',
        customBg: 'rgba(167, 199, 231, 0.03)',
				customBg2: 'rgba(167, 199, 231, 0.1)',
      },
			fontWeight: {
        '1200': 1200,
      },
			fontSize: {
				'2xs': '0.625rem',
			},
		},
	},
	plugins: [],
}
