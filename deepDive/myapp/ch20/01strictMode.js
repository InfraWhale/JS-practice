// strict mode

'use strict' ; // 선두에 추가하지 않으면, 추가 이전에는 strict mode가 적용되지 않음

function foo() {
    x = 10;
}
//foo(); // ReferenceError: x is not defined

// strict mode 시  this : 함수를 일반함수로서 호출하면 this에 undefined 바인딩
(function () {
    
    'use strict';
    
    function foo1() {
        console.log(this); 
    }
    foo1(); // undefined

    function foo2() {
        console.log(this);
    }

    new foo2(); // foo2 {}
}());

// strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 argument객체에 반영되지 않음
(function (a) {
    
    'use strict';
    
    // 매개변수에 전달된 인수를 재할당하여 변경
    a = 2;

    // 변경된 인수가 arguments객체에 반영되지 않음
    console.log(arguments);
} (111111));