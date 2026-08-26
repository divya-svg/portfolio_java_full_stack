/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0B1120',
        darkCard: 'rgba(17, 24, 39, 0.7)',
        darkCardHover: 'rgba(30, 41, 59, 0.8)',
        primary: {
          DEFAULT: '#4E89FF',
          hover: '#3b75eb',
          glow: 'rgba(78, 137, 255, 0.35)',
        },
        electric: '#00D2FF',
        violetAccent: '#9D4EDD',
        navyBorder: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'blue-glow': '0 0 25px -5px rgba(78, 137, 255, 0.4)',
        'electric-glow': '0 0 30px -5px rgba(0, 210, 255, 0.4)',
      }
    },
  },
  plugins: [],
}
