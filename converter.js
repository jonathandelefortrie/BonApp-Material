var types = require('node-sass').types;
var fs = require('fs');

module.exports = {
  'url($filename)': function(file) {
    var filename = file.getValue();
    if (/\.svg\?embed$/.test(filename)) {
      var svg = fs.readFileSync(
        __dirname +
          '/node_modules/material-design-lite/src/' +
          filename.replace('?embed', ''),
        'utf8'
      );
      return new types.String(
        'url("data:image/svg+xml;base64,' +
          new Buffer(svg).toString('base64') +
          '")'
      );
    }
    return new types.String('url("' + filename + '")');
  }
};
