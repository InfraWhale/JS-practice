// 객체 동결

const person = {name: 'Jang'};

// 동결된 객체 아님
console.log(Object.isFrozen(person));

// 동결 -> 프로퍼티 추가, 삭제, 재정의, 쓰기 금지
Object.freeze(person);

// 동결된 객체로 바뀜
console.log(Object.isFrozen(person));

// writeable, configurable false임
console.log(Object.getOwnPropertyDescriptors(person));

// 추가 금지됨
person.age = 20;
console.log(person);

// 삭제 금지됨
delete person.name;
console.log(person);

// 프로퍼티 갱신 금지됨
person.name = 'Kim';
console.log(person);

// 프로퍼티 어트리뷰트 재정의 금지됨
/* Object.defineProperty(person, 'name', {configurable: true}); */ // -> TypeError: Cannot redefine property: name