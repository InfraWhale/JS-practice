//콜백함수

//n만큼 어떤 일 반복
function repeat(n) {
    for (var i = 0; i < n; i++) console.log(i);
}

repeat(5);

console.log("--------------------------------------")

// 다른일 하고싶으면 새로 정의해야 함

function repeat2(n) {
    for (var i = 0; i < n; i++) {
        // i가 홀수일 때만 출력
        if (i % 2) console.log(i);
    }
}
repeat2(5);

console.log("--------------------------------------")

// 함수 합성

function repeat3(n, f) {
    for (var i = 0; i < n; i++) {
        f(i);
    }
}

var logAll = function (i) {
    console.log(i);
};

repeat3(5, logAll);

console.log("--------------------------------------")

var logOdds = function (i) {
    if (i % 2) console.log(i);
};

repeat2(5, logOdds);
    