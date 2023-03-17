// String, Number, Boolean 생성자 함수를 이용한 형변환

const str1 = String(123);
console.log(str1, typeof str1);

const num1 = Number('123');
console.log(num1, typeof num1);

const bool1 = Boolean('123');
console.log(bool1, typeof bool1);

///////////////////////////////////

const str2 = new String(123);
console.log(str2, typeof str2);

const num2 = new Number('123');
console.log(num2, typeof num2);

const bool2 = new Boolean('123');
console.log(bool2, typeof bool2);