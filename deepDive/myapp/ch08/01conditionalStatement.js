// 조건문의 블록 생략

var num = 2;
var kind;

if (num > 0)        kind = '양수';
else if (num < 0)   kind = '음수';
else                kind = '영';

console.log(kind);

console.log("---------------------------------------")


// 삼항연산자 조건문

//0은 false 취급한다.
var kind = num ? (num > 0 ? '양수' : '음수') : '영';

console.log(kind);

console.log("---------------------------------------")

// switch문의 폴스루

var year = 2000; 
var month = 2;
var days = 0;

switch(month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invalid month');
}

console.log(days); // 29
