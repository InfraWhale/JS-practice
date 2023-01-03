// 네임스페이스 객체 사용

var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.name = 'Lee';

console.log(MYAPP.name);

MYAPP.person = {
    name: 'Lee',
    address: 'Seoul'
}

console.log(MYAPP.person.name); // Lee