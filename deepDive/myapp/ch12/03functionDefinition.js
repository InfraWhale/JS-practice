// 3 함수 생성시점 & 함수 호이스팅

console.dir(add);
console.dir(sub); // undefined

console.log(add(2,5));
console.log(sub(2,5));

function add(x, y) {
    return x + y; 
}

/* var sub = function (x, y) {
    return x - y; 
} // -> TypeError: sub is not a function */


