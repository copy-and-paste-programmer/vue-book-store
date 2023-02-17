/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#1C213E",
        "secondary":"#212443",
        "gray-soft": "#2B335B",
        "white-soft":"#9098D8",
      }
    },
    container:{
      center:true
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
