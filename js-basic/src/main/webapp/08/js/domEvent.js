var pic = document.querySelector("#pic");
pic.addEventListener("mouseover", changePic, false); // (이벤트 유형, 함수, 캡처 여부)
pic.addEventListener("mouseout", originPic, false);

function changePic() {
	pic.src = "images/boy.png";
}

function originPic() {
	pic.src = "images/girl.png";
}