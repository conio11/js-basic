var myVar = 100; // 전역 변수 선언
test();
document.write("myVar is " + myVar);

function test() { 			
	var myVar = 50; // 지역 변수 선언 (var 없으면 전역 변수)
}