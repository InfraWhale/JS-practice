// 논리곱
var and = 'Cat' && 'Dog'
console.log(and);

and = false && 'Dog'
console.log(and);

and = 'Cat' && false
console.log(and);

// 논리합
var or = 'Cat' || 'Dog'
console.log(or);

or = false || 'Dog'
console.log(or);

or = 'Cat' || false
console.log(or);

// 단축평가로 if 문 대체

    // Truthy -> 논리곱 연산자

    var done = true;
    var message = '';

    // 주어진 조건이 true
    if (done) message = '완료';
    console.log('논리곱 대체 전 : ', message);

    // if문을 단축평가로 대체 가능 (위와 아래는 같음)
    message = '';

    message = done && '완료';
    console.log('논리곱 대체 후 : ',message);

    // Falsy -> 논리합 연산자

    var done = false;
    var message = '';
    
    // 주어진 조건이 false
    if (!done) message = '미완료';
    console.log('논리합 대체 전 : ', message);
    
    // if문을 단축평가로 대체 가능 (위와 아래는 같음)
    message = '';
    
    message = done || '미완료';
    console.log('논리합 대체 후 : ',message);

// 삼항 연산자로 if else문 대체

var done = true;
var message = '';

// 주어진 조건이 true
if (done) message = '완료';
else      message = '미완료';
console.log('삼항연산자 대체 전 : ', message);

// if else문을 삼항연산자로 대체 가능 (위와 아래는 같음)
message = '';

message = done? '완료' : '미완료';
console.log('삼항연산자 대체 후 : ',message);

// 객체를 가리키는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티 참조할때
var elem1 = null;
var elem2 = undefined;

var value1 = elem1 && elem1.value; 
var value2 = elem2 && elem2.value; 

console.log('null? undefined? : ', value1, value2);

// 단축평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

console.log(getStringLength());
console.log(getStringLength('hi'));

/*     // 사용 안했을때 -> TypeError: Cannot read properties of undefined (reading 'length')
function getStringLength1(str) {
    return str.length;
}

console.log(getStringLength1());
console.log(getStringLength1('hi')); */

//ES6의 매개변수 기본값 설정
function getStringLength2(str = '') {
    return str.length;
}

console.log(getStringLength2());
console.log(getStringLength2('hi'));



