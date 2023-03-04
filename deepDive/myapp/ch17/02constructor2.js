// 객체리터럴을 사용할 때

const circle1 = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    }

}

console.log(circle1.getDiameter());

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    }

}

console.log(circle2.getDiameter());

// 프로퍼티가 동일함에도 불구하고 계속 같은 내용을 기술 -> 비효율적

// 생성자 함수를 사용할때
function Circle(radius) {
    // this : 생성자 함수가 생성할 인스턴스를 가리킴
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius; 
    };
}

// 인스턴스의 생성
const circle3 = new Circle(5);
const circle4 = new Circle(10);

console.log(circle3.getDiameter());
console.log(circle4.getDiameter());

// 생성자 함수에 new 안붙히면?
const circle5 = Circle(15);

console.log(circle5); //undefined -> 반환문 없으므로

console.log(radius);
console.log(getDiameter()); // Circle(15)에서 this는 전역객체를 가리킴 -> 변수 radius와 함수 getDiameter가 생성되어버림
