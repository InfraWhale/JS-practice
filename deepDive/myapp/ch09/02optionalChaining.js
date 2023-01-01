//기존 단축평가 이용시

var elem = null;

//elem이 Falsy값이면 elem으로 평가, Truthy값이면 elem.value로 평가
var value = elem && elem.value;
console.log(value);

//옵셔널 체이닝 이용 시

var elem = null;

//elem이 null또는 undefined면 undefined 반환, 아니면 우항의 프로퍼티 참조(?)
var value = elem?.value;
console.log(value);

////////////////////////////////////////////////////////////////////////

//기존 단축평가 이용시
var str = '';

var length = str && str.length;

console.log(length); // 공백 출력

//옵셔널 체이닝 이용 시
var str = '';

var length = str?.length;

console.log(length); // 0


