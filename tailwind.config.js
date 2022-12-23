/** @type {import('tailwindcss').Config} */
const konstaConfig = require("konsta/config");

// wrap your config with konstaConfig
module.exports = konstaConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
