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
        "secondary":"#262EA2"
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
