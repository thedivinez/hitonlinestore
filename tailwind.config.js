/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: { light: "#2A3D66", dark: "#1c2c4f" },
        primary: { light: "rgb(220 38 38)", dark: "rgb(185 28 28)" },
      },
    },
  },
  plugins: [],
}
