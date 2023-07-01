function newRegister() {
	var newP = document.createElement("p"); // 새 p 요소 만들기
	var userName = document.querySelector("#userName"); // 텍스트 필드 내용 가져오기
	var newText = document.createTextNode(userName.value); // 새 텍스트 노드 생성
	newP.appendChild(newText); // newText 노드를 newP 노드의 자식 노드로 연결

	var nameList = document.querySelector("#nameList"); // #nameList 가져오기
	nameList.appendChild(newP);
	userName.value = ""; // 다른 이름을 입력할 수 있도록 텍스트 필드 비우기	
}