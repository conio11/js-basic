'use strict';
// JSON
// Javascript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);
// console.error("Error Message"); // 새로운 라인 추가

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
		name: 'tori',
		color: 'white', 
		size: null,
		birthDate: new Date(),
		jump: () => {
			console.log(`${this.name} can jump!`);
		},
};
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'name' ? 'lemon' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // obj는 데이터만 포함하므로 함수 X

console.log(rabbit.birthDate.getDate()); // 콘솔에 날짜 출력
// obj.birthDate: String 타입이므로  getDate() 사용 불가 (Object)
// Object 타입으로 변환 시 사용 가능
console.log(obj.birthDate.getDate()); 