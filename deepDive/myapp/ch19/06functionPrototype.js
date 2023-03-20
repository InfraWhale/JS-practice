// 화살표 함수와 축약 표현으로 정의한 메서드

const Person = name => {
    this.name = name;
};

const obj = {
    foo() {}
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(Person.hasOwnProperty('prototype'));
console.log(obj.foo.hasOwnProperty('prototype'));

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(Person.prototype);
console.log(obj.foo.prototype);
