//instanceof

// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

//Person.prototype이 me 객체의 프로토타입 체인 상에 존재 -> true
console.log(me instanceof Person);
//Object.prototype이 me 객체의 프로토타입 체인 상에 존재 -> true
console.log(me instanceof Object);

// 프로토타입으로 교체할 객체
const parent = {};

// 프로토타입의 교체
Object.setPrototypeOf(me, parent);

// Person 생성자 함수와 parent 객체는 연결되어 있지 않음
console.log(Person.prototype === parent);
console.log(parent.constructor === Person);


//Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않음 -> false
console.log(me instanceof Person);
//Object.prototype이 me 객체의 프로토타입 체인 상에 존재 -> true
console.log(me instanceof Object);

// parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩
Person.prototype = parent;

//Person.prototype이 me 객체의 프로토타입 체인 상에 존재 -> true
console.log(me instanceof Person);
//Object.prototype이 me 객체의 프로토타입 체인 상에 존재 -> true
console.log(me instanceof Object);

console.log("-----------------------------------------------------------------------------");

// instanceof 직접구현

function isInstanceof(instance, constructor) {
    // 프로토타입 취득
    const prototype = Object.getPrototypeOf(instance);

    // 재귀 탈출 조건
    // prototype이 null이면 프로토타입의 체인의 종점에 다다른것임
    if (prototype === null) return false;

    // 프로토타입이 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true를 반환
    // 그렇지 않다면 재귀 호출로 프로토타입 체인 상의 상위 프로토타입으로 이동하여 확인
    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}

console.log(isInstanceof(me, Person));
console.log(isInstanceof(me, Object));
console.log(isInstanceof(me, Array));
