// 참조에 의한 전달 & 외부 상태의 변경

function changeval(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
}

// 외부 상태

var num = 100;
var person = {name: 'Lee'};

console.log(num);
console.log(person);

changeval(num, person);

console.log(num);
console.log(person);
