module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightOrange: "#ff5145",
        lightBlue: "#1efcaf",
        lightGreen: "#CCFFC8",
        github: "#000000",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        orbit: ["Orbitron", "sans-serif"],
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
