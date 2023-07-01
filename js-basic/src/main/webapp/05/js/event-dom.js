var coverImage = document.querySelector("#cover");
coverImage.onclick = function() {
	alert("눌렀습니다.");
};
coverImage.onmouseover = function() {
	coverImage.style.border = "5px black solid"; // 이미지에 마우스 커서를 올리면 검은 테두리 나타남
};
coverImage.onmouseout = function() {
	coverImage.style.border = ""; // 마우스 커서가 이미지를 벗어났을 때 테두리 없어짐
}