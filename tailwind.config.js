const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1975ba",
        secondary: "#f3c91d",
        tertiery: "#1072c0",
      },
      backgroundImage: {
        /* backgr: "url('/page 1_5.png')", */
      },
      screens: {
        sm: "854px", // Set custom small screen size to 854px
      },
    },
  },
  plugins: [],
};

module.exports = withMT(config);
