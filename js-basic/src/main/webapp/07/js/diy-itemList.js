var itemList = [];

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList() {
	var item = document.querySelector("#item").value;
	if (item != null) {
		itemList.push(item);
		document.querySelector("#item").value = ""; // id가 item인 요소 값을 지움
		document.querySelector("#item").focus(); // 텍스트 필드에 focus() 함수 적용
	}
	showList();
}

function showList() {
	var list = "<ul>";
	for (var i = 0; i < itemList.length; i += 1) {
		list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></list>";
	}
	list += "</ul>";
	
	document.querySelector("#itemList").innerHTML = list; // list 변수값 출력
	
	var remove = document.querySelectorAll(".close");
	
	for (var i = 0; i < remove.length; i += 1) {
		remove[i].addEventListener("click", removeList);
	}
}

function removeList() {
	var id = this.getAttribute("id");
	itemList.splice(id, 1);
	showList();
}