var types = require('node-sass').types;
var fs = require('fs');

var encode_svg = function(data) {
  var symbols = /[\r\n"%#()<>?\[\\\]^`{|}]/g;

  if (data.indexOf('"') >= 0) {
    data = data.replace(/"/g, "'");
  }

  data = data.replace(/>\s{1,}</g, '><');
  data = data.replace(/\s{2,}/g, ' ');
  data = data.replace(symbols, encodeURIComponent);

  return data;
};

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
        'url("data:image/svg+xml,' + encode_svg(svg) + '")'
      );
    }
    return file;
  }
};
