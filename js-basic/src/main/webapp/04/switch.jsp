<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>세션 선택</title>
		<link rel="stylesheet" href="css/switch.css">
	</head>
	<body>
		<script>
			// promt 내 (,) 뒤의 값은 입력창에 미리 입력되는 부분
			var session = prompt("관심 세션을 선택해 주세요. 1-마케팅, 2-개발, 3-디자인", "1");
			
			switch (session) {
				case "1": document.write("<p>마케팅 세션은 <strong>201호</strong>에서 진행됩니다.</p>");
				break;
				case "2": document.write("<p>개발 세션은 <strong>203호</strong>에서 진행됩니다.</p>");
				break;
				case "3": document.write("<p>디자인 세션은 <strong>205호</strong>에서 진행됩니다.</p>");
				break;
			default: alert("잘못 입력했습니다.");
			}
			
		</script>
	</body>
</html>