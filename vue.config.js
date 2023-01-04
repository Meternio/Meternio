const path = require('path');

function addStyleResource(rule) {
  rule.use('style-loader', 'css-loader', 'less-loader')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/global.less'),
      ],
    });
}

module.exports = {
  pwa: {
    themeColor: '#01579b',
  },
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
  },
  css: {
    loaderOptions: {
      // pass Less.js Options to less-loader
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        globalVars: {

        },
      },
    },
  },
};
