// 함수 정의

// 1 함수 선언문

function add(x, y) {
    return x + y;
}

console.dir(add); // 함수 객체의 프로퍼티 출력
console.log(add(2,5));

/* function(x,y) {
    return x + y;
} // -> SyntaxError: Function statements require a function name */
 // 함수 선언문은 함수 이름 생략 불가

// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석됨
function foo() {console.log('foo');}
foo();

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아닌 함수 리터럴 표현식으로 해석
/* (function bar() {console.log('bar');});
bar(); // -> ReferenceError: bar is not defined */

/*  var addy = function (x, y) {
    return x + y;
 };

 console.log(addy(2,5)); */
