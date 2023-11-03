/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      calc: {
        customHalf: "calc(50 % -212)",
      },
    },
  },
  plugins: [],
};
