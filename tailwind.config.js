module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        github: "#0C1116",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      "2xl": { max: "5350px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
