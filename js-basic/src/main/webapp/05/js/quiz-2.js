function comparison(num1, num2) {
	if (num1 > num2) {
		alert(num1 + "(이)가 " + num2 + "보다 큽니다.");
	} else if (num1 == num2) {
		alert(num1 + "(와)과 " + num2 + "은(는) 같습니다.");
	} else {
		alert(num2 + "(이)가 " + num1 + "보다 큽니다.");
	}
}

var num1 = parseInt(prompt("비교할 첫 번째 숫자"));
var num2 = parseInt(prompt("비교할 두 번째 숫자"));
comparison(num1, num2);