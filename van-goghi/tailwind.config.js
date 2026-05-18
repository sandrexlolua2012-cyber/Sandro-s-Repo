export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#c9a84c', light: '#d4af37', dark: '#a8892f' },
        wine: { DEFAULT: '#7b2d3d', light: '#8b3142', dark: '#5c1f2e' },
        cream: { DEFAULT: '#f5e6c8', light: '#faf3e0', dark: '#e8d5b0' },
        charcoal: { DEFAULT: '#111111', light: '#1a1a1a', dark: '#0a0a0a' },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        glow: { from: { boxShadow: '0 0 20px #c9a84c33' }, to: { boxShadow: '0 0 40px #c9a84c66' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
    },
  },
  plugins: [],
}
