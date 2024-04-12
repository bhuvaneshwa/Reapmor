/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',  // Mobile devices: 320px — 480px
        'sm': '480px',  // iPads, tablets: 481px — 768px
        'md': '769px',  // Small screens, laptops: 769px — 1024px
        'lg': '1025px', // Desktops, large screens: 1025px — 1200px
        'xl': '1201px', // Extra large screens, TV: 1201px and above
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
