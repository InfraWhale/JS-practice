//문자열에서 특정 문자 갯수 세기

var string = 'Hello World.';
var search = 'l';
var count = 0;

// 문자열은 유사 배열이므로 for문으로 순회할 수 있다.
for (var i =0; i < string.length; i++) {
    //'l'이 아니면 현 지점에서 실행을 중단하고 반복문 증감식으로 이동.
    if (string[i] !== search) continue;
    count++; // continue 문이 실행되면 이 문은 실행 안됨.
}

console.log(count);

//아래처럼 해도 같은 결과
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); // 3