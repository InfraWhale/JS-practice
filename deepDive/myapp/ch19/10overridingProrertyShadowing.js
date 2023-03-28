// 오버라이딩과 프로퍼티 섀도잉

const Person = (function() {
    // 생성자 함수
    function Person(name)  {
        this.name = name;
    }

    //  프로토타입 메서드
    Person.prototype.sayHello = function () {
        console.log(`Hi! My name is ${this.name}`);
    };

    //생성자함수를 반환
    return Person;
}());

const me = new Person('Lee');

// 인스턴스 메서드 : 이걸로 오버라이드
me.sayHello = function () {
    console.log(`Hey!!!!!!!!!!!!!!!!!!!! My name is ${this.name}`);
}

// 인스턴스 메서드가 호출. 프로토타입 메서드는 인스턴스 메서드에 의해 가려짐 : 프로퍼티 섀도잉
me.sayHello();

// 인스턴스 메서드 삭제
delete me.sayHello;
// 인스턴스에 sayHello 메서드 없으므로 프로토타입 메서드가 호출
me.sayHello();

// 프로토타입 체인을 통해 프로토타입 메서드가 삭제되지 않음. -> 하위 객체에선 불가능
delete me.sayHello;
// 프로토타입 메서드가 호출
me.sayHello();

// 변경 또는 삭제하려면 프로토타입에 직접 접근해야함

// 프로토타입 메서드 변경
Person.prototype.sayHello = function() {
    console.log(`Heyyyyyy! My name is ${this.name}`);
};
me.sayHello();

// 프로토타입 메서드 삭제
delete Person.prototype.sayHello;
//me.sayHello(); //TypeError: me.sayHello is not a function