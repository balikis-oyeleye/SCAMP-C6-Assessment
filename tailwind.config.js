module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        pale_orange: "hsl(25, 100%, 94%)",
      },
    },
  },
  plugins: [],
};
