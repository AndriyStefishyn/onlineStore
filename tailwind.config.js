/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      protest: ["Protest Riot", "sans-serif"],
    },
    extend: {
      colors: {
        "light-brown": "#D2B48C",
      },
    },
  },
  plugins: [],
};

