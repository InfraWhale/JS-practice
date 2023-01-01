//null 병합 연산자

// 좌항의 피연산자가 null이거나 undefined면 우항의 피연산자 반환
// 아니라면 좌항의 피연산자 반환
var foo = null ?? 'default string';
console.log(foo);

//단축평가 사용하는 경우

var foo = '' || 'default string'
console.log(foo);

// 좌항 피연산자가 falsy 값이면서 null이나 undefined아니면 좌항 피연산자 반환
var foo = '' ?? 'default string';
console.log(foo); // ''출력