// 프로퍼티 정의

const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
    value: 'Hyobeom',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(person, 'lastName', {
    value: 'Jang',
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);

//디스크립터 객체 프로퍼티 누락 -> undefined, false가 기본값
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

//[[Enumerable]] 값 false -> for...in문이나 Object.keys등으로 열거 불가
console.log(Object.keys(person));

//[[Writable]] 값 false -> 해당 프로퍼티 [[Value]] 변경 불가
person.lastName = 'Kim';

//[[Configure]] 값 false-> 해당 프로퍼티 삭제 불가
delete person.lastName;

//[[Configure]] 값 false-> 해당 프로퍼티 재정의 불가
/* Object.defineProperty(person, 'lastName', {
    enumerable: true
}); // -> TypeError: Cannot redefine property: lastName */

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

// 접근자 프로퍼티 정의

Object.defineProperty(person, 'fullName', {
    //getter함수
    get() {
        return `${this.firstName} ${this.lastName}`
    },

    //setter 함수
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);

person.fullName = 'Heegun Lee';
console.log(person);
console.log(person.lastName);



