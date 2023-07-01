var itemList = []; // 준비물을 저장할 배열 생성

// 배열에 넣을 자료가 필요 -> [추가] 버튼 눌렀을 때 텍스트 필드에 입력된 값을 배열에 추가
var addBtn = document.querySelector("#add"); // id가 add인 요소를 addBtn 변수에 저장
addBtn.addEventListener("click", addList); // addBtn을 클릭하면 addList 함수 실행 // addBtn.onclick = addList; 와 같이 사용 가능

function addList() {
	var item = document.querySelector("#item").value; // 텍스트 필드 내용 가져옴
	if (item != null) { // 입력값이 있을 경우에만 
		itemList.push(item); // itemList 배열 끝에 item 변수값 추가
		document.querySelector("#item").value = ""; // id가 item인 요소 값을 지움
		document.querySelector("#item").focus(); // 텍스트 필드에 focus() 함수 적용
	}
	showList();
}

function showList() {
	var list = "<ul>";
	for (var i = 0; i < itemList.length; i += 1) { // 배열 요소마다 반복
		list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
	}
	list += "</ul>";
	
	document.querySelector("#itemList").innerHTML = list; // list 변수값 출력
	
	var remove = document.querySelectorAll(".close"); // 삭제버튼을 변수로 저장(class가 close인 모든 요소를 가져옴). 배열 형태
	
	for (var i = 0; i < remove.length; i += 1) { // remove 배열의 모든 요소 확인
		remove[i].addEventListener("click", removeList); // 요소를 클릭하면 removeList() 실행
	}
}

function removeList() {
	// console.log(this); // X버튼 클릭 시 콘솔창에서 확인 가능
	var id = this.getAttribute("id"); // this(클릭한 삭제 버튼)의 id 값 가져와 id 변수에 저장
	itemList.splice(id, 1); // itemList 배열에서 인덱스 값이 id인 요소 1개 제거
	showList(); // 변경된 itemList 배열을 다시 화면에 표시
}
