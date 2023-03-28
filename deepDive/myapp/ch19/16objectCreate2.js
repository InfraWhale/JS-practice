// object.create에 의한 프로토타입 종점에 위치하는 객체

const obj = { a: 1};

console.log(obj.hasOwnProperty('a'));
console.log(obj.propertyIsEnumerable('a')); // 특정 속성이 열거가능한지 여부를 나타내는 boolean 값을 반환

// 프로토타입이 null인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체를 생성

const obj2 = Object.create(null);
obj2.a = 1;

console.log(Object.getPrototypeOf(obj2) === null);

// obj2는 Object.prototype의 빌트인 메서드 사용 불가
// console.log(obj2.hasOwnProperty('a')); // TypeError: obj2.hasOwnProperty is not a function

// Object.prototype의 빌트인 메서드 객체로 직접 호출하지 말고 간접적으로 호출하기
console.log(Object.prototype.hasOwnProperty.call(obj2, 'a')); // true
