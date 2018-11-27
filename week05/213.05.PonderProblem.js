function problem1()
{
	alert("Hello World!");
}

function problem2(){
	var str = document.getElementById("text2").innerHTML;
	var input = document.getElementById('form2').elements.namedItem('name2').value;
	var res = str.replace(/RICH_GUY/g, input);
	window.alert(res);
}

function problem3(){
	var temperature = document.getElementById('form3').elements.namedItem('text3').value;
	celsius = (temperature - 32) / 1.8;
	alert(celsius.toFixed(1) +"° Celsius");
}

function problem4(){
	var input = document.getElementById('form4').elements.namedItem('text4').value;
	if (input == 1)
		alert("$0.98");
	if (input == 2)
		alert("$1.19");
	if (input == 3)
		alert("$1.40");
	if (input == 4)
		alert("$1.61");
	if (input == 5)
		alert("$1.82");
	if (input < 0 || input > 5)
		alert("Invalid weight");
}

function problem5(){
	var apr = document.getElementById('form5').elements.namedItem('apr5'   ).value;
	var term = document.getElementById('form5').elements.namedItem('term5'  ).value;
	var amount = document.getElementById('form5').elements.namedItem('amount5').value;
	
	apr = apr / 100;
	
	for (var i = 1; i <= term; i++)
	{
		amount = amount * ( 1 + apr);
	}

	alert("$" + amount.toFixed(2));
}