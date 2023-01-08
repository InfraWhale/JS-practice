// 객체 확장금지

const person = {name: 'Jang'};

// 확장 금지된 객체 아님
console.log(Object.isExtensible(person));

// 확장 금지시킴
Object.preventExtensions(person);

// 확장 금지된 객체로 바뀜
console.log(Object.isExtensible(person));

// 프로퍼티 추가 금지
person.age = 20;
console.log(person);

// 프로퍼티 삭제는 가능
delete person.name;
console.log(person);

// 프로퍼티 갱신은 가능
person.name = 'Kim';
console.log(person);

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지됨
/* Object.defineProperty(person, 'age', {value: 20}); */ // -> TypeError: Cannot define property age, object is not extensible
