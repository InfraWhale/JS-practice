// 객체 리터럴의 확장 기능

// <프로퍼티 축약 표현>

// ES5

var x = 1, y = 2;

var obj1 = {
    x: x,
    y: y
}

console.log("obj1 : ", obj1)

// ES6
let a = 1, b = 2;

    // 프로퍼티 축약 표현
const obj2 = { a, b };

console.log("obj2 : ", obj2);

// <계산된 프로퍼티 이름> 

//ES5

var prefix = 'prop';
var i = 0;

var obj3 = {};

    //계산된 프로퍼티 이름  
obj3[prefix + '-' + ++i] = i;
obj3[prefix + '-' + ++i] = i;
obj3[prefix + '-' + ++i] = i;

console.log("obj3 : ", obj3);

// ES6

const prefix2 = 'prop';
let j = 0;

    //계산된 프로퍼티 이름  
const obj4 = {
    [`${prefix}-${++j}`] : j,
    [`${prefix}-${++j}`] : j,
    [`${prefix}-${++j}`] : j
};


console.log("obj4 : ", obj4);

// <메서드 축약 표현>

//ES5
var obj5 = {
    name : 'Lee',
    sayHi: function() {
        console.log('Hi! ' + this.name);
    }
};

obj5.sayHi();

//ES6

var obj6 = {
    name : 'Jang',
    sayHi() {
        console.log('Hi! ' + this.name);
    }
};

obj6.sayHi();