/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a2858',
        'secondary': '#FFEAE3',
        'accent-1': '#FFCBCB',
        'accent-2': '#FFB1B1',
        'charcoal':'#464646'
      },
      animation: {
        fadeInOnce: 'fadeIn 2s ease-in-out 1',
        slideUpOnce: 'slideUp 1s ease-in-out 1',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
