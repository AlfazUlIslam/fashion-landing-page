/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px"
    },
    extend: {
      colors: {
        darkYellow: "#FDBB57",
        darkerYellow: "#FFAF37",
        lightBeige: "#FEECC8",
        darkBeige: "#CFA485",
        lightBlack: "#262626",
        lightGray: "#C4C4C4",
        mediumGray: '#F5F5F3',
      },
      fontFamily: {
        podkova: ["'Podkova'", "serif"],
        libre: ["'Frank Ruhl Libre'", "serif"],
        poppins: ["'Poppins'", "sans-serif"]
      }
    },
  },
  plugins: [],
}

