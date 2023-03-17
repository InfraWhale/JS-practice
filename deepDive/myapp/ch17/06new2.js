// new 연산자 없이 생성자 함수 호출

// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수 호출 -> 일반 함수로서 호출됨

const circle = Circle(5);

console.log(circle);

// 일반함수 내부의 this -> 전역 객체 window
console.log(radius);
console.log(getDiameter());

//circle.getDiameter(); // TypeError: Cannot read properties of undefined (reading 'getDiameter')