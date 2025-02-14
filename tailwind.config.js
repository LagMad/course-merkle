/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cust-black': "#18171C",
        'cust-blue': "#2A4264",
        'cust-green': "#15532E",
        'cust-purple': "#512DA7",
        'cust-purple-light': "#815BD5",
        'cust-purple-lighter': "#A278FF"
      }
    },
  },
  plugins: [],
};
