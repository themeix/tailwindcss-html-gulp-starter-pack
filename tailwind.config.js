module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#39A2DB',
          light: '#A2DBFA'
        },
        dark: {
          primary: '#053742'
        },
        gray: {
          primary: '#E8F0F2'
        }
      }
    },
  },
  // Other stuff
};