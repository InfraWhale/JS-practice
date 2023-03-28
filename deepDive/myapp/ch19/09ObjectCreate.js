// 객체 생성방식과 프로토타입 결정

// 객체리터럴에 의해 생성
const obj1 = { x : 1 };

// 이 경우 object.prototype을 상속받음
console.log(obj1.constructor === Object); //constructor property는 obj1가 가지고 있는게 아니라 상속받은거
console.log(obj1.hasOwnProperty('x')); // hasOwnProperty 메서드는 obj1가 가지고 있는게 아니라 상속받은거

// Object 생성자 함수에 의해 생성
const obj2 = new Object();
obj2.x = 1;

// 이 경우 object.prototype을 상속받음
console.log(obj2.constructor === Object); //constructor property는 obj2가 가지고 있는게 아니라 상속받은거
console.log(obj2.hasOwnProperty('x')); // hasOwnProperty 메서드는 obj2가 가지고 있는게 아니라 상속받은거

// 생성자 함수에 의해 생성
function Person(name)  {
    this.name = name;
}

//  프로토타입 메서드
Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
};

const me = new Person('Lee');
const you = new Person('Kim');

me.sayHello();
you.sayHello();

console.log(me.constructor === Person);
console.log(me.hasOwnProperty('name')); 
//hasOwnProperty는 Person.prototype에는 없음 -> 프로토타입 체인에 의해 Object.prototype으로부터 상속됨

console.log(Object.getPrototypeOf(me) === Person.prototype);
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);

console.log(Object.prototype.hasOwnProperty.call(me, 'name')); // true, call 메서드는 this로 사용할 객체를 전달하면서 함수를 호출

console.log(me.foo); //undefined, Object.property에서도 검색 불가능한 경우 에러를 띄우는게 아니라 undefined를 띄움