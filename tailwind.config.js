/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        naruto: "url('./images/akatsuki.jpg')",
      },
      width: {
        slice: "31.8%",
      },
    },
  },
  plugins: [],
};
