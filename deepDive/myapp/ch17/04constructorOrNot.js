// 생성자인지 아닌지 구분하기

function foo() {}; // 함수 선언문
const bar = function() {}; // 함수 표현식

// 프로퍼티의 값으로 할당 -> 일반 함수임
const baz = {
    x: function() {}
}

// 전부 오류 없음
new foo();
new bar();
new baz.x();

/////////////////////////////////////////////////////////

const arrow = () => {}; // 화살표 함수

// ES6 메서드 축약표현
const obj = {
    x() {}
};

// new arrow(); // TypeError: arrow is not a constructor
// new obj.x(); // TypeError: obj.x is not a constructor





