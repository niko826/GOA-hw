exports.log = (msg) => console.log('[LOG]', msg);

const { log } = require('./logger');
log('hello');
