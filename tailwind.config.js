/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a365d",
        secondary: "#2c5282",
        accent: "#4299e1",
      },
    },
  },
  fontFamily: {
    tajawal: ["Tajawal", "sans-serif"],
  },
  plugins: [],
};
