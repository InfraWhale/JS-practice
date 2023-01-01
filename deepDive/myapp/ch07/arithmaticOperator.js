// + 단항연산자

var x = '1';

console.log(typeof(+x));
console.log(typeof(x));

x = true
console.log(+x);
console.log(x);

x = false
console.log(+x);
console.log(x);

x = 'Hello'
console.log(+x);
console.log(x);

console.log("---------------------------------------")

// - 단항연산자
console.log(-(-10));
console.log(-'10');
console.log(-true);
console.log(-'Hello');

console.log("---------------------------------------")

//문자열 연결 연산자

console.log('1' + 2);
console.log(1 + '2');
console.log(1 + 2);

console.log(1 + true);
console.log(1 + false);
console.log(1 + null);

console.log(+ undefined);
console.log(1 + undefined);