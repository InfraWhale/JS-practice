// 프로퍼티 열거

// 3) Object.keys/values/entries
const person = {
    name : 'Kim',
    address : 'Busan',
    __proto__: {age: 20},
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log(Object.entries(person).forEach(([key, value]) => console.log(key, value)));