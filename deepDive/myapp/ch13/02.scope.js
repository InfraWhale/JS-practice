//동명의 변수 2개 있을때 스코프

var x = 'global';

function foo() {
    var x = 'local';
    console.log(x);
}

foo();

console.log(x);