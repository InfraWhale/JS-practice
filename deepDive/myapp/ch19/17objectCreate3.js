// 객체 리터럴 내부 __proto__에 의한 직접 상속 (깔끔한 방법은 아님)

const myProto = { x: 10 };

// 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속 가능
const obj = {
    y: 20,
    // 객체를 직접 상속받음
    // obj -> myProto -> Object.prototype -> null
    __proto__ : myProto
};

// 위 코드는 아래와 동일
const obj2 = Object.create(myProto, {
    y: {value: 20, writable: true, enumerable: true, configurable: true }
});

console.log(obj.x, obj.y);
console.log(Object.getPrototypeOf(obj) === myProto);
