/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'nav-bar': '#051129'
      },
      boxShadow: {
        'custom-blue': '1px 1px 20px #012290f7, 1px 1px 40px #0053b8f7',
        'cyan': '0 0 5px cyan, 0 0 25px cyan',
        'box-style':'0 0 5px rgb(221, 0, 255), 0 0 15px rgb(191, 0, 255), 0 0 5px cyan;',
        'link-style':'0 0 5px rgb(221, 0, 255), 0 0 15px rgb(191, 0, 255), 0 0 5px cyan;'
      },

    },
  },
  plugins: [],
}

