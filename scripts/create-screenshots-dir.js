const fs = require('fs');
const path = require('path');

const dir = path.resolve('screenshots');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}