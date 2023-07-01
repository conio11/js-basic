var now = new Date(); // 오늘 날짜 정보를 Date 객체의 인스턴스 now 객체로 저장
var firstDay = new Date("2015-08-02"); // 처음 만난 날의 날짜 정보를 firstDay 객체로 저장
var toNow = now.getTime(); // 오늘 날짜를 밀리초로 변환
var toFirst = firstDay.getTime(); // 처음 만난 날을 밀리초로 변환
var passedTime = toNow - toFirst; // 처음 만난 날과 오늘 날짜 사이의 차이 (밀리초)
var passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24)); // 밀리초를 날짜 수로 변환한 후 반올림
// 밀리초 * 1000: 1초, 1초 * 60: 1분, 1분 * 60: 1시간, 1시간 * 24: 1일
document.querySelector("#accent").innerText = passedDay + "일"; // innerText: innerHTML과 달리 HTML 내 요소는 무시

function calcDate(days) {
	var future = toFirst + days * (1000 * 60 * 60 * 24); // 처음 만난 날에 days일을 더함
	var someday = new Date(future); // future 값을 사용해 Date 객체의 인스턴스 생성
	var year = someday.getFullYear(); // someday(days일 후)의 연도를 year 변수에 저장
	var month = someday.getMonth() + 1; // someday(days일 후)의 월을 month 변수에 저장
	var date = someday.getDate(); // someday(days일 후)의 일을 date 변수에 저장
	document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + date + "일";
} 

calcDate(100); // 100일 기념일의 날짜 출력
calcDate(200); // 200일 기념일의 날짜 출력
calcDate(365); // 1년 기념일의 날짜 출력
calcDate(500); // 500일 기념일의 날짜 출력

 