// name property

// 기명함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name);

// 익명함수 표현식
var anonymousFunc = function() {};
console.log(anonymousFunc.name); // anonymousFunc로 나옴. ES5의 경우 빈 문자열을 값으로 가짐

// 함수선언문(Function declaration)
function bar() {}
console.log(bar.name);