/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./pages/*"
  ],
  theme: {
    extend: {
        borderColor: {
            'ninja-green': 'rgb(22, 64, 72)', 
        },
        colors: {
            'blackish': 'rgb(11, 9, 9)',
            'donatello': 'rgb(227, 140, 250)'
        }
    },
  },
  plugins: [],
};
