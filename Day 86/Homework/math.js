module.exports = {
  add: (a,b) => a+b,
  mul: (a,b) => a*b
};

const math = require('./math');
console.log(math.add(2,3));
