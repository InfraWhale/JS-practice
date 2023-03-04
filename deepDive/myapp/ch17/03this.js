// this가 가리키는것

function foo() {
    console.log(this);
}

// 일반적인 함수로서 호출
foo(); //  Object [global] -> Node.js환경이므로 global. 브라우저 환경이라면 window임

const obj = { foo }; // ES6 프로퍼티 축약 표현 ... ?

// 메서드로서 호출
obj.foo(); // { foo: [Function: foo] } -> obj 가리키는듯

// 생성자 함수로서 호출
const inst = new foo(); // foo {} -> inst 가리키는듯


