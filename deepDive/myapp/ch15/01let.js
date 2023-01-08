//let의 블록 레벨 스코프

let foo = 1; // 전역변수

let vari = 10;

{
    let foo = 2; // 지역변수

    console.log(foo);

    let bar = 3; // 지역변수

    vari = 100;
}

console.log(foo);
/* console.log(bar); // -> ReferenceError: bar is not defined */
console.log(vari);