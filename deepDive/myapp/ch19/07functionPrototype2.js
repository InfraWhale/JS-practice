// 생성자 함수의 프로토타입

function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

// Person.prototype과 me.__proto__는 동일한 프로토타입을 가리킴
// Person.prototype : 생성자 함수가 자신이 생성할 객체(인스턴스)의 프로토타입을 할당하기 위해 사용
// me.__proto__ : 객체가 자신의 프로토타입에 접근 또는 교체 위해 사용
console.log(Person.prototype === me.__proto__);

// me 객체의 생성자 함수는 Person임
console.log(me.constructor === Person);