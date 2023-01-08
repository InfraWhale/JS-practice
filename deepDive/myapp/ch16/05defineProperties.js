// 프로퍼티 여러개 한 번에 정의

const person = {};

Object.defineProperties(person, {

    // 데이터 프로퍼티 정의
    firstName: {
        value: 'Hyobeom',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Jang',
        writable: true,
        enumerable: true,
        configurable: true
    },

    //접근자 프로퍼티 정의
    fullName: {
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
    }
});
console.log(person);

person.fullName = 'Heegun Lee';
console.log(person);