/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#e8c97a',
          400: '#d4a847',
          500: '#c9a84c',
          600: '#b8963e',
          700: '#9a7c30',
        },
        wine: {
          400: '#a52020',
          500: '#8b1a1a',
          600: '#6b1414',
        },
        cream: {
          50:  '#fdf9f3',
          100: '#f5f0e8',
          200: '#e8dcc8',
          300: '#d4c5a9',
          400: '#b8a88a',
        },
        charcoal: {
          900: '#080808',
          800: '#0f0f0f',
          700: '#161616',
          600: '#1e1e1e',
          500: '#272727',
          400: '#333333',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.5em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4a847 0%, #f0d080 50%, #c9a84c 100%)',
        'dark-gradient': 'linear-gradient(180deg, #080808 0%, #161616 100%)',
      },
    },
  },
  plugins: [],
}
