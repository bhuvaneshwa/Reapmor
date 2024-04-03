/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '425px', // Small devices (e.g., phones)
        'md': '768px', // Medium devices (e.g., tablets)
        'lg': '1024px', // Large devices (e.g., laptops)
        'xl': '1280px', // Extra large devices (e.g., desktops)
      
      },
    },
  },
  plugins: [],
}
