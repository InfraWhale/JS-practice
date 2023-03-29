// 정적 프로퍼티/메서드

// 생성자 함수
function Person(name) {
    this.name = name;
}

//프로토타입 메서드
Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
};

// 정적 프로퍼티
Person.staticProp = 'static prop'

// 정적 메서드
Person.staticMethod = function () {
    console.log('staticMethod');
};

const me = new Person('Lee');

// 생성자 함수에 추가한 정적 프로퍼티 / 메서드는 생성자 함수로 참조/호출
console.log(Person.staticProp);
Person.staticMethod();

// 정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없음
// 인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인 상에 존재해야 함
// me.staticMethod(); // TypeError: me.staticMethod is not a function

// Object.create는 정적 메서드임
const obj = Object.create({ name: 'Lee'});
// Object.prototype.hasOwnProperty는 프로토타입 메서드임
console.log(obj.hasOwnProperty('name')); //false : 객체 고유의 프로퍼티가 아니므로 false
console.log('name' in obj); // true : 확인 대상 객체가 상속받은 모든 프로토타입의 프로퍼티 확인
console.log('toString' in obj); // true : toString은 Object.prototype의 메서드
console.log(Reflect.has(obj, 'name')); // true : in 연산자와 동일하게 작용

function Foo() {}

// 프로토타입 메서드
// this를 참조하지 않는 프로토타입 메서드는 정적 메서드로 변경하여도 동일한 효과를 얻을 수 있다
Foo.prototype.x = function() {
    console.log('x');
};

// 프로토타입 메서드를 호출하려면 인스턴스를 생성해야 한다
const foo = new Foo();
foo.x();

// 정적 메서드
Foo.y = function () {
    console.log('y');
}

// 정적 메서드는 인스턴스를 호출하지 않아도 호출할 수 있다.
Foo.y();

