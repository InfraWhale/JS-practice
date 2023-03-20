// arguments property

function multiply(x, y) {
    console.log(arguments);
    return x * y;
}

console.log(multiply());
console.log(multiply(1));
console.log(multiply(1, 2));
console.log(multiply(1, 2, 3));

//arguments 객체로 가변인자 함수 구현

function sum() {
    let res = 0;

    // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for문 순회 가능
    for(let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}

console.log(sum());
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));00