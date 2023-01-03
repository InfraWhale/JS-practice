// 즉시 실행 함수

// 익명 즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

// 기명 즉시 실행 함수
(function foo () {
    var a = 3;
    var b = 5;
    return a * b;
}());

/* foo(); // -> ReferenceError: foo is not defined */

/* function () {

}(); */ // -> SyntaxError: Function statements require a function name
// 함수 선언문은 함수이름 생략 불가 -> 에러

/* function foo() {

}(); */ // -> SyntaxError: Unexpected token ')'
// 중괄호 닫는 부분 뒤에 ;이 암묵적으로 추가되어 에러가 발생함
// function foo() {}(); // => function foo() {};();
// 따라서 ()는 함수 호출 연산자가 아니라 그룹 연산자로 해석됨

console.log(typeof (function f(){}));
console.log(typeof (function (){}));

// 즉시실행함수로 값 반환

var res1 = (function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res1);

// 즉시실행함수로 인수 전달

var res2 = (function (a, b) {
    return a * b;
}(3, 5));

console.log(res2);


