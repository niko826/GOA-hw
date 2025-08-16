const strings = [" Hello ", " WORLD ", " Test String "];

const cleaned = Map.strings(str => str.tolowercase().replace(/\s/g, ""));

console.log(cleaned);