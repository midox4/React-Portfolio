/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Kaushan Script",
        secondary: "signature",
        third: "Poppins",
      },
    },
  },
  plugins: [],
};
