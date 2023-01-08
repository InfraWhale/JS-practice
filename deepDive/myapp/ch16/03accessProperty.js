// 접근자 프로퍼티

const person = {
    // 데이터 프로퍼티
    firstName: 'Hyobeom',
    lastName: 'Jang',


    //getter함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    //setter 함수
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

// 데이터 프로퍼티를 통한 프로퍼티 값 참조
console.log(person.firstName + ' ' + person.lastName);

// 접근자 프로퍼티를 통한 프로퍼티 값 저장
// 접근자 프로퍼티 fullname에 값을 저장하면 setter 함수가 호출
person.fullName = 'Heegun Lee';
console.log(person);

// 접근자 프로퍼티를 통한 프로퍼티 값 참조
// 접근자 프로퍼티 fullname에 접근하면 getter 함수가 호출
console.log(person.fullName);

// firstName은 데이터 프로퍼티
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);

// fullName은 접근자 프로퍼티
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);

// 프로토타입의 접근자 프로퍼티와 데이터 프로퍼티

// 일반객체의 __proto__는 접근자 프로퍼티
let proto = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
console.log(proto);

// 함수객체의 prototype은 데이터 프로퍼티
proto = Object.getOwnPropertyDescriptor(function() {}, 'prototype');
console.log(proto); 