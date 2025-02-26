/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./App.{js,jsx,ts,tsx}",
    "./Presentation/**/*.{js,jsx,ts,tsx}"
],
presets: [require("nativewind/preset")],
theme: {
    extend: {},
},
plugins: [],
}

