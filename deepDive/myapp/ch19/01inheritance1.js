// 상속 사용 전

// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * this.radius **2;
    };
}

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는 getArea 메서드를 중복생성하고, 모든 인스턴스가 중복 소유함.
// getArea메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는것이 바람직함
console.log(circle1.getArea === circle2.getArea);

console.log(circle1.getArea());
console.log(circle2.getArea());