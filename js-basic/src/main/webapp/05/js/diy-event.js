function showDetail() { // [상세 설명 보기] 클릭했을 때 상세 설명을 보여줌
	document.querySelector('#desc').style.display = "block";
	document.querySelector('#open').style.display = "none";
}

function hideDetail() { // [상세 설명 닫기] 클릭했을 때 상세 설명을 감춤
	document.querySelector('#desc').style.display = "none";
	document.querySelector('#open').style.display = "block";
}