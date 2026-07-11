import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1400px',
      'desktop-lg': '1920px',
      'desktop-xl': '2560px',
    },
    extend: {
      colors: {
        graphite: '#272727',
        orange: '#CD7829',
        offwhite: '#EEEEEE',
        placeholder: '#7C7777',
        'service-text': '#F4F4FD',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif'],
        fallback: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
