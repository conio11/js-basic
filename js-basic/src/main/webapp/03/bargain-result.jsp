<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>할인 가격 구하기</title>
		<link rel="stylesheet" href="css/bargain.css">
	</head>
	<body>
		<div id="contents">
			<img src="images/sale.png">
			<ul>
				<li>
					<label for="oPrice">원래 가격</label> <!-- for: 레이블을 클릭하면 id가 oPrice인 요소에 포커스  -->
					<input type="text" id="oPrice">원 
				</li>
				<li>
					<label for="rate">할인율</label> <!-- for: 레이블을 클릭하면 id가 rate인 요소에 포커스  -->
					<input type="text" id="rate">%
				</li>
				<li>
					<button onclick="showPrice()">할인 가격 계산하기</button>
				</li>
			</ul>
			<div id="showResult"></div>
		</div>
		<script>
			function showPrice() {
				var originPrice = document.querySelector('#oPrice').value; // 원래 가격
				var rate = document.querySelector('#rate').value; // 할인율
				var savedPrice = originPrice * (rate / 100); // 할인 금액
				var resultPrice = originPrice - savedPrice; // 원래 가격 - 할인 금액 (최종 가격)
				document.querySelector('#showResult').innerHTML = "상품의 원래 가격은 " + originPrice + "원이고, 할인율은 " + rate + "% 입니다. " + savedPrice + "원을 절약한 " + resultPrice + "원에 살 수 있습니다.";
			} 
		</script>
	</body>
</html>