// __proto__대신 사용하면 좋은 메서드 (03번과 비교)

const obj = {};
const parent = { x: 1 };

// obj 객체의 프로토타입 취득
Object.getPrototypeOf(obj);

// obj 객체의 프로토타입 교체
Object.setPrototypeOf(obj, parent);

console.log(obj.x);
