// 스코프

var var1 = 1; // 코드 가장 바깥영역
if (true) {
    var var2 = 2; // 코드 블록 내
    if (true) {
        var var3 = 3; // 중첩된 코드 블록 내
    }
}

function foo() {
    var var4 = 4; // 함수 내

    function bar() {
        var var5 = 5; // 중첩된 함수 내
    }
}

console.log(var1);
console.log(var2);
console.log(var3);
/* console.log(var4); //ReferenceError: var4 is not defined */
/* console.log(var5); //ReferenceError: var5 is not defined */


