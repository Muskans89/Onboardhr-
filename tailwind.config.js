/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all files in src directory with these extensions
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#22b9f5',  // Adding the custom blue color
      },
    },
  },
  plugins: [],
}
