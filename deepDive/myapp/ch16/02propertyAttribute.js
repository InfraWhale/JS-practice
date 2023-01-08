// 프로퍼티 어트리뷰트 접근

const person = {
    name: 'Lee',
    age: 20
};

// 프로퍼티 어트리뷰트 정보 제공하는 프로퍼티 디스크럽터 객체 반환
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보 제공하는 프로퍼티 디스크럽터 객체 반환
console.log(Object.getOwnPropertyDescriptors(person));
