/* This code snippet is a configuration file for Tailwind CSS. It defines the configuration options for
Tailwind CSS, such as the content to be processed, theme settings like screen sizes for responsive
design, and any plugins to be used. */
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         'sm': '425px', // Small devices (e.g., phones)
//         'md': '768px', // Medium devices (e.g., tablets)
//         'lg': '1024px', // Large devices (e.g., laptops)
//         'xl': '1280px', // Extra large devices (e.g., desktops)
      
//       },
//     },
//   },
//   plugins: [],
// }



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
    },
  },
  plugins: [],
}
