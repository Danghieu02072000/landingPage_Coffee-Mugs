/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html",
            "./src/js/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'light-coffee': '#C89F94',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'ms': '994px',
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        slideDown : {
          '0%' : {transform: 'translateY(-140%)'},
          '100%': {transform: 'translateY(0%)'},
        },
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out ',
      },
      backgroundImage: {
        'bg-slider': "url('../../src/images/img_slide.jpg')",
      },
    },
  },
  plugins: [],
}

