const mixed = [true, "hello", 42, {a:1}, "world", [1,2], false];
const onlyStrings = mixed.filter(item => typeof item === 'string');
console.log(onlyStrings); 



