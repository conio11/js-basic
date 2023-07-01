function checkId() {
	// 입력된 아이디의 길이가 4 미만, 15를 초과할 경우
	if (userId.value.length < 4 || userId.value.length > 15) {
		alert("4 ~15 자리의 영문과 숫자를 입력하세요."); // 메시지 출력
		userId.select(); // 다시 입력할 수 있도록 userId 필드를 선택
	}
}

function checkPw() {
	if (pw1.value.length < 8) {
		alert("8자리 이상의 비밀번호를 입력해주세요.");
		pw1.value = ""; // 비밀번호 필드 삭제
		pw1.focus(); // 다시 입력할 수 있도록 포커싱
	}
}

function comparePw() {
	if (pw2.value != pw1.value) { // 입력된 두 값이 다르다면
		alert("암호가 다릅니다. 다시 입력하세요.");
		pw2.value = ""; // 비밀번호 확인 필드 삭제
		pw.focus(); // 다시 입력할 수 있도록 포커싱
	}
	
}

var userId = document.querySelector("#user-id"); // 아이디 필드를 가져와 변수에 저장
userId.onchange = checkId; // userId에 change 이벤트 발생 시 checkId() 함수 실행





var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

pw1.onchange = checkPw;
pw2.onchange = comparePw; 

