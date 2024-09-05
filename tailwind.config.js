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
        'primary': '#121481',
        'secondary': '#FFEAE3',
        'accent-1': '#FFCBCB',
        'accent-2': '#FFB1B1',
        'charcoal':'#464646'
      },
    },
  },
  plugins: [],
}
