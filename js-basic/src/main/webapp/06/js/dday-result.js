var now = new Date(); // 오늘 날짜 정보를 Date 객체의 인스턴스인 now 객체로 생성
var firstDay = new Date("2015-08-02"); // 처음 만난 날의 날짜 정보를 firstDay 객체로 생성
var toNow = now.getTime(); // 오늘 날짜를 밀리초로 변경
var toFirst = firstDay.getTime(); // 처음 만난 날을 밀리초로 변경
var passedTime = toNow - toFirst; // 처음 만난 날과 오늘 사이의 차이 (밀리초)
var passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000)); // 밀리초를 일(day)로 변환 후 반올림 
document.querySelector("#accent").innerText = passedDay + "일"; // id가 accent인 영역에 표시

calcDate(100); // 100일 기념일을 계산해 표시
calcDate(200); // 200일 기념일을 계산해 표시
calcDate(365); // 1년 기념일을 계산해 표시
calcDate(500); // 500일 기념일을 계산해 표시

function calcDate(days) {
	var future = toFirst + days * (1000 * 60 * 60 * 24); // 처음 만난 날에 밀리초로 바꾼 100일을 더함
	var someday = new Date(future); // future 값을 사용해 Date 객체의 인스턴스 생성
	var year = someday.getFullYear(); // 연도를 가져와 year 변수에 저장
	var month = someday.getMonth() + 1; // 월을 가져와 month 변수에 저장
	var date =  someday.getDate(); // 일을 가져와 date 변수에 저장
	document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + date + "일";
}