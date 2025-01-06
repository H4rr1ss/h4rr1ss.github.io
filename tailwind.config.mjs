/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				tbase: '#e8e8e8',
				secundary: '#7FD8FA',
				complement: '#FAC97F',
				details: '#bbbaba',
        customBg: 'rgba(167, 199, 231, 0.03)',
				customBg2: 'rgba(167, 199, 231, 0.1)',
      },
			fontWeight: {
        '1200': 1200,
      },
		},
	},
	plugins: [],
}
