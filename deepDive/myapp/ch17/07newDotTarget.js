// new.target

// 생성자 함수

function Circle(radius) {
    // 이 함수가  new 연산자와 호출되지 않음 -> new.target은 undefined
    if (!new.target) {
        //new 연산자와 함께 생성자 함수를 재귀호출, 생성된 인스턴스를 반환
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출
const circle = Circle(5);
console.log(circle.getDiameter());