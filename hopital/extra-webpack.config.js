const webpack = require('webpack');

module.exports = {
  resolve: {
    alias: {
      'core-js/modules/es.string.replace.js': require.resolve('core-js/modules/es.string.replace.js'),
      'core-js/modules/es.string.split.js': require.resolve('core-js/modules/es.string.split.js'),
      'core-js/modules/es.string.starts-with.js': require.resolve('core-js/modules/es.string.starts-with.js'),
      'core-js/modules/es.string.trim.js': require.resolve('core-js/modules/es.string.trim.js'),
      'core-js/modules/web.dom-collections.iterator.js': require.resolve('core-js/modules/web.dom-collections.iterator.js'),
      'raf': require.resolve('raf'),
      'jspdf-autotable': require.resolve('jspdf-autotable')
    }
  }
};
