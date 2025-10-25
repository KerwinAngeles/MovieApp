/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        light:{
          100: "#D6C6FF",
          200:"A8B5DB",
          300: "#9CA4AB",
        },
        dark:{
          100: "#221F3D",
          200: "#1B1737",
        },
        accent: "#AB8BFF",
      },
    },
  },
  plugins: [],
}