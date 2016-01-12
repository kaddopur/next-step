process.chdir(__dirname);

require('babel-register');

module.exports = require('./server');
