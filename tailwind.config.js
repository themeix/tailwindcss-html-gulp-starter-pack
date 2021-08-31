module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false,
  theme: {
       extend: {   
      colors: {
        "black": "#1E1E1E",
        "white": "#ffffff",
        "blue-100": "#D0E2E8",        
        "gray-300": "#565656",      
      
      },
      borderRadius: {
        'xs': '5px',
        'sm': '10px',
        'md': '40px',
       'lg': '40px',
      },
      fontFamily: {
        sans: [
          '"Red Hat Display",sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        
      },

      boxShadow: {
        sm: '0px 16px 20px 0px rgba(0, 0, 0, 0.059)',
        md: '0px 20px 40px 0px rgba(0, 0, 0, 0.102)',
        lg: '0px 80px 80px 0px rgba(17, 89, 118, 0.149)',

        none: 'none',
      },  


    },
  },
  // Other stuff
};
