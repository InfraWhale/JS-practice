// 레이블 문

foo: {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('DONE!');

//outer라는 식별자가 붙은 레이블 for문
outer: for(var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        // i + j ===이면 outer라는 식별자가 붙은 레이블 for문을 탈출
        if (i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log('DONE!');

//특정 문자의 인덱스 위치 검색 예제

var string = 'Hello World.';
var search = 'l';
var index;

//문자열은 유사 배열이므로 for문으로 순회 가능

for (var i =0; i < string.length; i++) {
    //문자열의 개별 문자가 'l'이면
    if (string[i] === search) {
        index = i;
        break; // 반복문 탈출
    }
}

console.log(index);
//이렇게도 사용 가능
console.log(string.indexOf(search));