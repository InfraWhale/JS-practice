// __proto__ 접근자 property

const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체 -> Object.prototype
console.log(obj.__proto__ === Object.prototype); // true

// 객체 리터럴 방식으로 생성한 객체는, 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받음
console.log(obj.hasOwnProperty('a')); // true | 객체 고유의 프로퍼티 키이므로
console.log(obj.hasOwnProperty('__proto__')); // false | 상속받은 프로토타입의 프로퍼티 키이므로