/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#49129C',
        secondary: {
          DEFAULT: '#B40086',
          100: '#C51297',
          200: '#831266'
        },
        tertiary: '#EF2967'
      },
      fontFamily: {
        'inter-black': ['Inter_24pt-Black', 'sans-serif'],
        'inter-light': ['Inter_24pt-Light', 'sans-serif'],
        'inter-medium': ['Inter_24pt-Medium', 'sans-serif']
      }
    },
  },
  plugins: [],
}

