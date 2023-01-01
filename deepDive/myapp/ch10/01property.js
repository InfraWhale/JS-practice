//프로퍼티 키 동적생성

var obj = {};
var key = 'hello';

obj[key] = 'world';

console.log(obj);

// 메서드를 프로퍼티로 사용

var circle = {
    radius : 5,

    getDiameter : function() {
        return 2 * this.radius; // this는 cricle을 가리킴
    }
};

console.log(circle.getDiameter());

// 프로퍼티 접근

var person = {
    'last-name' : 'Lee',
    1 : 10
}

/* console.log(person.'last-name'); //-> SyntaxError: Unexpected string */
/* console.log(person.last-name); //-> ReferenceError: name is not defined */
/* console.log(person[last-name]); //-> ReferenceError: last is not defined */
console.log(person['last-name']);

/* console.log(person.1); //-> missing ) after argument list */
/* console.log(person.'1'); //-> SyntaxError: Unexpected string */
console.log(person[1]); //암묵적 형변환 됨
console.log(person['1']);

// 프로퍼티 삭제

var person = {
    name : 'Lee'
}

person.age = 20; // 프로퍼티의 동적 생성

console.log(person);

delete person.age;

delete person.address; // 없는 프로퍼티 삭제해도 에러 안뱉음

console.log(person);