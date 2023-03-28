// 프로토타입의 교체

// 2) 인스턴스로 프로토타입을 교체

function Person(name)  {
    this.name = name;
}

const me = new Person('Lee');

// 프로토타입으로 교체할 객체
const parent = {
    sayHello() {
        console.log(`Hi! My name is ${this.name}`);
    }
}
// me 객체의 프로토타입을 parent객체로 교체
Object.setPrototypeOf(me, parent);
// me.__proto__ = parent; //-> 위 코드와 동일하게 작용함

me.sayHello();

// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴됨
console.log(me.constructor === Person);

// 프로토타입 체인을 따라 Object.prototype의 constructor가 검색됨
console.log(me.constructor === Object);


//@@프로토타입으로 교체한 객체리터럴에 constructor 프로퍼티를 추가하는 경우

function Person2(name)  {
    this.name = name;
}

const me2 = new Person('Lee');

// 프로토타입으로 교체할 객체
const parent2 = {
    constructor : Person2,
    sayHello() {
        console.log(`Hi! My name is ${this.name}`);
    }
}

// 생성자 함수의 prototype프로퍼티와 프로토타입 간의 연결을 설정
Person2.prototype = parent2

// me2 객체의 프로토타입을 parent2객체로 교체
Object.setPrototypeOf(me2, parent2);
// me2.__proto__ = parent2; //-> 위 코드와 동일하게 작용함

me2.sayHello();

// constructor프로퍼티가 생성자 함수를 가리킴
console.log(me2.constructor === Person2);
console.log(me2.constructor === Object);

// 생성자 함수의 prototype 프로퍼티가 교체된 프로토타입을 가리킴
console.log(Person2.prototype === Object.getPrototypeOf(me2));