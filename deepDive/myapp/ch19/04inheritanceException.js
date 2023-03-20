// __proto__를 상속받지 못하는 경우

// obj는 프로토타입 체인의 종점 -> Object.__proto__ 상속 불가
const obj = Object.create(null); // 이 객체의 프로토타입이 null임 -> 이 객체는 object.prototype

// obj는 Object.__proto__를 상속받을 수 없음
console.log(obj.__proto__);

// 위 대신 Object.getPrototypeOf 메서드를 사용하는 편이 나음
console.log(Object.getPrototypeOf(obj)); 
