function add(a, b) {
	var sum = a + b;
	return sum;
}

var num1 = parseInt(prompt("첫 번째 숫자를 입력하세요."));
var num2 = parseInt(prompt("두 번째 숫자를 입력하세요."));

var result = add(num1, num2);
document.write("<p>" + num1 + " + " + num2 + " = " + result + "</p>");