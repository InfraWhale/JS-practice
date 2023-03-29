// 프로퍼티 열거

// 1) for ... in 문
const person = {
    name : 'Lee',
    address : 'Seoul'
};

// for ... in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당
for (const key in person) {
    console.log(key + ': ' + person[key]);
}

// in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인
console.log('toString' in person); // true

// for ... in 문도 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거
// 하지만 toString과 같은 Object.prototype의 프로퍼티는 열거되지 않음

// 프로퍼티 어트리뷰트 [[Enumeralbe]] 값이 false이기 떄문
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));
// {
//     value: [Function: toString],
//     writable: true,
//     enumerable: false,
//     configurable: true
// }

const sym = Symbol();
const person2 = {
    name : 'Kim',
    address : 'Busan',
    __proto__: {age: 20},
    [sym]: 10 // 프로퍼티 키가 심볼인 프로퍼티는 열거하지 않음
};

// 이 경우 프로토타입 체인 상에 존재하는 모든 프로퍼티를 열거
for (const key in person2) {
    console.log(key + ': ' + person2[key]);
}

// 그게 싫다면 hasOwnProperty 사용
for (const key in person2) {
    if (!person2.hasOwnProperty(key)) continue;
    console.log(key + ': ' + person2[key]);
}
