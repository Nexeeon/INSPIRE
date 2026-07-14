/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#800020',
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f8c9d3',
          300: '#f299ac',
          400: '#e8607e',
          500: '#d93058',
          600: '#b8183f',
          700: '#800020',
          800: '#6b0020',
          900: '#5a0020',
        },
        gold: {
          DEFAULT: '#FFD700',
          50: '#fffde7',
          100: '#fff9c4',
          200: '#fff176',
          300: '#FFD700',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
        },
        ivory: {
          DEFAULT: '#FFF8E7',
          50: '#fffef9',
          100: '#FFF8E7',
          200: '#fff1c6',
        },
        charcoal: {
          DEFAULT: '#36454F',
          50: '#f0f4f6',
          100: '#d9e3e8',
          200: '#b3c7d1',
          300: '#8daaba',
          400: '#678ea3',
          500: '#36454F',
          600: '#2d3a43',
          700: '#232e36',
          800: '#1a2228',
          900: '#10161a',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'particle': 'particle 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'counter': 'counter 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.8)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(255, 215, 0, 0.5)' },
          '50%': { textShadow: '0 0 40px rgba(255, 215, 0, 1), 0 0 80px rgba(255, 215, 0, 0.5)' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) rotate(720deg)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
