var isOpen = false;
// var cup = document.querySelector("#cup");
// var smallPics = document.querySelectorAll(".small");

var bigPic = document.querySelector("#cup");  
var smallPics = document.querySelectorAll(".small");  

for (i = 0; i < smallPics.length; i++) {
	smallPics[i].addEventListener("click", function() {
		newPic = this.src;
		bigPic.setAttribute("src", newPic);
	});
}

var view = document.querySelector("#view"); // id가 view인 요소
view.addEventListener("click", function() {
	if (isOpen == false) { // 상세정보가 보이지 않을 때 실행됨
		document.querySelector("#detail").style.display = "block"; // 화면에 표시
		view.innerText = "상세 설명 닫기";
		isOpen = true; // 표시 상태로 지정
	} else { // 상세정보가 보일 때 실행
		document.querySelector("#detail").style.display = "none"; // 화면에서 감추기
		view.innerText = "상세 설명 보기";
		isOpen = false; // 감춤 상태로 지정
	}
	
	
	
	// document.querySelector("#detail").style.display = "block";
});


