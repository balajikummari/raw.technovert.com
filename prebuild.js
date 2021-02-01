const fs = require('fs');
fs.rmdirSync('/public', { recursive: true });
console.log('deleted old build')