var check = document.querySelector("#shippingInfo"); // 체크박스 가져오기
check.addEventListener("click", function() { // check 요소에 click 이벤트 발생 시 실행
	if (check.checked == true) { // 체크박스가 체크된다면
		document.querySelector("#shippingName").value = document.querySelector("#billingName").value; // 주문정보(이름)를 배송정보에 복사
		document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value; // 주문정보(연락처)를 배송정보에 복사
		document.querySelector("#shippingAddr").value = document.querySelector("#billingAddr").value; // 주문정보(주소)를 배송정보에 복사		
	} else { // 체크가 해제되면 배송 정보 필드를 지움
		document.querySelector("#shippingName").value = "";
		document.querySelector("#shippingTel").value = "";
		document.querySelector("#shippingAddr").value = "";
	}
	
});
