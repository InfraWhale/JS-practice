// 인수 확인

function add1(x, y) {
    return x + y;
}

console.log(add1(2));
console.log(add1('a', 'b'));


function add2(x, y) {
    if (typeof x !== 'number' || typeof y !=='number') {
        //매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러 발생
        throw new TypeError('인수는 모두 숫자값이어야 합니다.');
    }

    return x + y;
}

/* console.log(add2(2)); // -> TypeError: 인수는 모두 숫자값이어야 합니다. */
/* console.log(add2('a', 'b')); // -> TypeError: 인수는 모두 숫자값이어야 합니다. */


function add3(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(add3(1, 2, 3)); 
console.log(add3(1, 2)); 
console.log(add3(1)); 
console.log(add3()); 
console.log(add3('a', 'b', 'c')); 


function add4(a = 0, b = 0, c = 0) {
    return a + b + c;
}

console.log(add4(1, 2, 3)); 
console.log(add4(1, 2)); 
console.log(add4(1)); 
console.log(add4()); 
console.log(add4('a', 'b', 'c'));


