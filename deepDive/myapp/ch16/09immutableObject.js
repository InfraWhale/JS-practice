// 불변 객체

// 객체 동결 사용시

const person = {
    name: 'Jang',
    address: {city: 'Seoul'}
}

// 얕은 객체 동결
Object.freeze(person);

// 직속 프로퍼티만 동결됨
console.log(Object.isFrozen(person));

// 중첩 객체까진 동결 못함
console.log(Object.isFrozen(person.address));
person.address.city = 'Busan';
console.log(person);

// 중첩 객체까지 동결하여 변경 불가능한 읽기 전용 객체 : 불변객체
// 모든 프로퍼티에 대해 재귀적으로 Object.freeze 호출
function deepFreeze(target) {
    if (target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

const person2 = {
    name: 'Kim',
    address: {city: 'Daegu'}
}

deepFreeze(person2);

// 직속 프로퍼티 동결됨
console.log(Object.isFrozen(person2));

// 중첩 객체도 동결됨
console.log(Object.isFrozen(person2.address));
person2.address.city = 'Jeju';
console.log(person2);