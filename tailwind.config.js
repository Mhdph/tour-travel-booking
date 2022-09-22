/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shabnam: ["Shabnam"],
      },
      colors: {
        landing: {
          50: "#0A7777",
        },
      },
      boxShadow: {
        "3xl": "0px 4px 8px rgba(168, 168, 168, 0.25)",
      },
      backgroundColor: {
        primary: "#0A7777",
      },
    },
  },
  plugins: [],
};
