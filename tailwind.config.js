/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'bounce-slow':'upDownAnimation 4s infinite',
        'boy-animation':'boyAnimation 4s infinite'
      },
      keyframes: {
        'upDownAnimation': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'boyAnimation':{
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(5deg)' },
        }
      }
      
    },
    color:{
      "Fuchs":'#e879f9',
    }

  },
  plugins: [],
}

