process.chdir(__dirname);

process.env.BABEL_DISABLE_CACHE = 1;

require('babel-register');

module.exports = require('./server');
