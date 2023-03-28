// 프로토타입의 교체

// 1) 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
const Person = (function() {
    function Person(name)  {
        this.name = name;
    }

    // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
        sayHello() {
            console.log(`Hi! My name is ${this.name}`);
        }
    };

    //생성자함수를 반환
    return Person;
}());

const me = new Person('Lee');

// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴됨
console.log(me.constructor === Person);

// 프로토타입 체인을 따라 Object.prototype의 constructor가 검색됨
console.log(me.constructor === Object);


//@@프로토타입으로 교체한 객체리터럴에 constructoir 프로퍼티를 추가하는 경우

const Person2 = (function() {
    function Person2(name)  {
        this.name = name;
    }

    //  1) 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person2.prototype = {
        constructor : Person2,
        sayHello() {
            console.log(`Hi! My name is ${this.name}`);
        }
    };

    //생성자함수를 반환
    return Person2;
}());

const me2 = new Person2('Lee');

// constructor프로퍼티가 생성자 함수를 가리킴
console.log(me2.constructor === Person2);
console.log(me2.constructor === Object);
