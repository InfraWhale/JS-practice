// 프로퍼티 열거

// 2) for ... of & forEach

const arr = [1, 2, 3];
arr.x = 10;

for (const i in arr) {
    // 프로퍼티 x도 출력
    console.log(i, arr[i]);
}

for (let i = 0; i <arr.length; i++) {
    // 프로퍼티 x는 출력안됨
    console.log(i, arr[i]);
}

// forEach 메서드는 요소가 아닌 프로퍼티는 제외함
arr.forEach(v => console.log(v));

// for ... of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당
for (const value of arr) {
    console.log(value);
}