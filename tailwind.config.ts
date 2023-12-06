import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#01080E',
        'primary-blue': '#011627',
        'primary-dark-blue': '#011221',
        'primary-gray': '#E5E9F0',

        'secondary-gray': '#1C2B3A',
        'secondary-blue': '#607B96',
        'secondary-green': '#3C9D93',
        'secondary-purple': '#4D5BCE',

        white: '#FFFFFF',

        'accent-orange': '#FEA55F',
        'accent-green': '#43D9AD',
        'accent-red': '#E99287',
        'accent-pink': '#C98BDF',

        lines: '#1E2D3D',
      },
      fontSize: {
        headline: '3.875rem',
        subHeadline: '2rem',
        bodyText: '1.125rem',
        labels: '1rem',
        code: '0.875rem',
      },
      screens: {
        'phone-sm': '320px',
        'phone-md': '375px',
        'phone-xl': '425px',
      },
    },
  },
  plugins: [],
}
export default config
