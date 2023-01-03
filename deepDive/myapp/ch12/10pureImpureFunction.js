var count = 0;

// 순수함수 : 동일한 인수 전달되면 동일한 값 반환
function increase(n) {
    return ++n;
}

increase(count);
console.log("1번째", count)

// 순수함수가 반환한 결과값을 변수에 재할당하여 상태 변경
count = increase(count);
console.log("2번째", count);

count = increase(count);
console.log("3번째", count);

// 비순수함수
function decrease() {
    return --count; // 외부 상태에 의존하며 외부 상태를 변경
}

// 비순수 함수는 외부상태(count)를 변경하므로 상태 변화를 추적하기 어려워짐
decrease();
console.log("4번째", count);

decrease();
console.log("5번째", count);