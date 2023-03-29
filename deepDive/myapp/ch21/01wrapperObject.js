// 래퍼 객체

const str = 'hi';

// 원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환됨
console.log(str.length);
console.log(str.toUpperCase());

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌림
console.log(typeof str);