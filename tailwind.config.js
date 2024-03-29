/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#34CAA5",
      backgroundone: "#F7F8FA",
      backgroundtwo: "#FAFAFA",
      darkbg: "#292929",
      border: "#EBECF2",
      danger: "#e3342f",
      primaryfont: "#26282C",
      secondaryfont: "#787486",
      carddark: "#292929",
    }),
    extend: {
      keyframes: {
        progressbar: {
          "0% ": { width: "0" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
