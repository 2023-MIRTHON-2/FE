/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "signiture-red": "FF6550",
      colors: {
        "my-red": "#B3483A",
        "my-light-red": "#FFCAC3",
        "my-green": "#11434A",
        "my-light-green": "#B6D8DD",
      },
    },
    mode: "jit",
  },
  plugins: [],
};
