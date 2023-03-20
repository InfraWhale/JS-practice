// Object 객체 생성과정

// 다음의 순서 따름

// 1. 만약 new.target이 undefined이거나 Object가 아닌 경우
// 인스턴스 -> Foo.prototype -> Object.prototype순으로 프로토타입 체인이 생성
class Foo extends Object {}
new Foo;
console.log(Foo);

// 2. 생성자함수에 인수를 전달하지 않거나 undefined 또는 null을 인수로 전달하는 경우
// 인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성
let obj = new Object();
console.log(obj);

// 3. 인수가 전달된 경우
obj = new Object(123);
console.log(obj);

// String 객체 생성
obj = new Object('123');
console.log(obj);