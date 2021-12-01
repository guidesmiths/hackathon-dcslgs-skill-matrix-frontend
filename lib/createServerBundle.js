const debug = require('debug');
const fs = require('fs');
const path = require('path');

const origin = path.join(__dirname, '..', 'frontend', 'build', 'index.html');
const destinantion = path.join(__dirname, '..', 'frontend', 'build', 'index.hbs');
// This function is needed to server side rendering enviroment
// and different segment information
if (process.env.NODE_ENV) {
  fs.copyFile(origin, destinantion, err => {
    if (err) { throw err; }
    debug('index.html was copied to index.hbs');
    fs.unlinkSync(origin);
    debug('index.html was deleted');
  });
}
