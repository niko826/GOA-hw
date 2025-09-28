export default function greet(name) { return `Hello, ${name}!`; }
export const lang = 'ka';


import greet, { lang } from './greet.js';
console.log(greet('Nika'), lang);
