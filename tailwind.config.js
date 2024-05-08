/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'header-image-mobile': "url('/images/bg-header-mobile.png')",
        'header-image-desktop': "url('/images/bg-header-desktop.png')", 
      },
      
      backgroundColors:{
        primary:{
          'Strong Cyan': 'hsl(171, 66%, 44%)',
          'Light Blue': 'hsl(233, 100%, 69%)',
        },

        Neutral:{
          'Dark Grayish Blue': 'hsl(210, 10%, 33%)',
          'Grayish Blue': 'hsl(201, 11%, 66%)'
        }
      }
    },
  },
  plugins: [],
}

