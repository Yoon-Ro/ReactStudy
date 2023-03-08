/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Sigma: "Sigmar One"
    },
    extend: {
      animation: {
        'spin-fast': 'spin 0.5s linear infinite',
        'marquee-infinite': 'marquee 30s linear infinite',
      },
      colors: {
        Purple: "#4a34cc",
        HummingBird: "#d1f1ee",
        yellow: "#e4d63b",
        Solitude: "#e9e9ea",
        gray: "#4B4B4C"
      },
      animation: {
        slide: "slide 100s linear infinite"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' } 
        },
        slide: {
          "0%,100%" : {transform: "translateX(4%)"},
          "50%": {transform: "translateX(-20%)"}
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}