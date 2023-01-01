var key = Symbol('key');
console.log(typeof key); // symbol

var obj = {};

obj[key] = 'value';
console.log(obj[key]);