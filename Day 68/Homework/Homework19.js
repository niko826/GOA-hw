const obj1 = {name:Nika,age:16};
const obj2 = {isadmin: true,city:Tbilisi};

const both = {...obj1,...obj2};

console.log(both);