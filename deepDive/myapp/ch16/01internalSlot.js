// 내부 슬롯 간접 접근

const o = {};

// 내부 슬롯은 자바스크립트 엔진 내부 로직이므로 직접 접근 불가
/* o.[[Prototype]]; //-> SyntaxError: Unexpected token '[' */

// 일부 내부 슬롯과 내부 메서드에 한해 간접 접근 가능
console.log(o.__proto__);