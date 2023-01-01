var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary);
console.log(octal);
console.log(hex);
console.log(binary === octal);
console.log(octal == hex);

console.log("-------------------------------------------")

console.log(1 === 1.0);
console.log(4 / 2);
console.log(3 / 2);

console.log("-------------------------------------------")

console.log(10 / 0);
console.log(10 / -0);
console.log(1 * 'String');

var x = nan;
console.log(x);