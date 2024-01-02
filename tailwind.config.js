/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      const newUtitlities = {
        ".no-scrollbar::-webkit-scrollbar": {
          opacity: 0
        },
       
      };

      addUtilities(newUtitlities);
    }
  ],
}