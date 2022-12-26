module.exports = {
  pwa: {
    themeColor: '#01579b',
  },
  css: {
    loaderOptions: {
      // pass Less.js Options to less-loader
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        globalVars: {
          primary: '#ff6f00',
          light: '#ffa040',
          dark: '#c43e00',

          secondary: '#ffea00',
          secondaryLight: '#ffff56',
          secondaryDark: '#c7b800',

          positive: '#2e7d32',
          negative: '#c62828',
          info: '#0277bd',
          warning: '#f57f17',

          white: '#fff',
          black: '#000',
          gray: '#e0e0e0',
        },
      },
    },
  },
};
