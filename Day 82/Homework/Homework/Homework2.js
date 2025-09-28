function capitalize(str){
    if(!str) return '';
return str[0].toUpperCase() + str.slice(1);
}

function reverse(str){
    return str.split('').reverse().join('');
}

function toUpperCase(str){
    return str.toUpperCase();
}

function toLower(str){
    return str.toLowerCase();
}

 module.exports = {
    capitalize,
    reverse,
    toUpperCase,
    toLower
};