/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}