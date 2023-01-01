//NaN

console.log(NaN === NaN);
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(10));
console.log(Number.isNaN(1 + undefined));

//0

console.log(0 === -0);
console.log(0 == -0);

//Object.is
console.log(Object.is(-0, +0));
console.log(Object.is(NaN, NaN));



