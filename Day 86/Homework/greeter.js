module.exports = function(name) { return `Hi ${name}`; };


const greet = require('./greeter');
console.log(greet('Nika'));