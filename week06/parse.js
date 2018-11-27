function problem1(){
	var input1 = document.getElementById('form1').elements[0].value;
	var input2 = document.getElementById('form1').elements[1].value;
	
	if (input1 > 0 && input1 <= 118)
		document.getElementById('error1').style.visibility = "hidden";
	else
		document.getElementById('error1').style.visibility = "visible";
	
	if (input2 > 0 && input2 <= 118)
		document.getElementById('error2').style.visibility = "hidden";
	else
		document.getElementById('error2').style.visibility = "visible";
}

function problem2(){
	var input1 = document.getElementById('form2').elements[0].value;
	var input2 = document.getElementById('form2').elements[1].value;
	

	//pattern ignores white spaces hurray!
	var pattern = /^\s*\d{3}-\d{2}-\d{4}\s*$/;
	
	if (input1.match(pattern))
		document.getElementById('form2').getElementsByTagName('td')[1].style.visibility = "hidden";
	else
		document.getElementById('form2').getElementsByTagName('td')[1].style.visibility = "visible";
	
	if (input2.match(pattern))
		document.getElementById('form2').getElementsByTagName('td')[3].style.visibility = "hidden";
	else
		document.getElementById('form2').getElementsByTagName('td')[3].style.visibility = "visible";
}

function problem3(){
	var input1 = document.getElementById('form3').elements[0].value;
	var input2 = document.getElementById('form3').elements[1].value;
	
	var pattern = /^\s*(\d{4}\s?){4}\s*$/;
	
	if (input1.match(pattern))
		document.getElementById('form3').getElementsByTagName('td')[1].style.visibility = "hidden";
	else
		document.getElementById('form3').getElementsByTagName('td')[1].style.visibility = "visible";
	
	if (input2.match(pattern))
		document.getElementById('form3').getElementsByTagName('td')[3].style.visibility = "hidden";
	else
		document.getElementById('form3').getElementsByTagName('td')[3].style.visibility = "visible";
}

function problem4(){
	var input1 = document.getElementById('form4').elements[0].value;
	var input2 = document.getElementById('form4').elements[1].value;
	
	//alert(input1);
	document.getElementById('form4').getElementsByTagName('td')[1].style.visibility = "hidden";
	//var pattern = /^\s*([1-9]|1[0-2)\/([1-9]|1\d|2\d|3[01])\/(19|20)\d\d\s*$/;
	var pattern = /^\s*(0[1-9]|[12][0-9]|3[01])[/ /.](0[1-9]|1[012])[/ /.](175[3-9]|17[6-9]\d|18\d\d|19\d\d|20\d\d)\s*$/;
	
	
	if (input1.match(pattern))
		document.getElementById('form4').getElementsByTagName('td')[1].style.visibility = "hidden";
	else
		document.getElementById('form4').getElementsByTagName('td')[1].style.visibility = "visible";
	
	if (input2.match(pattern))
		document.getElementById('form4').getElementsByTagName('td')[3].style.visibility = "hidden";
	else
		document.getElementById('form4').getElementsByTagName('td')[3].style.visibility = "visible";
}

function problem5(){
	var input1 = document.getElementById('form5').elements[0].value;
	var input2 = document.getElementById('form5').elements[1].value;
	
	var pattern = /^\s*(AK|AL|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)\s*$/;
	
	//var pattern = /^(AK|AZ|AR)$/;
	
	if (input1.match(pattern))
		document.getElementById('form5').getElementsByTagName('td')[1].style.visibility = "hidden";
	else
		document.getElementById('form5').getElementsByTagName('td')[1].style.visibility = "visible";
	if (input2.match(pattern))
		document.getElementById('form5').getElementsByTagName('td')[3].style.visibility = "hidden";
	else
		document.getElementById('form5').getElementsByTagName('td')[3].style.visibility = "visible";
}

function problem6(){
	var input1 = document.getElementById('form6').elements[0].value;
	var input2 = document.getElementById('form6').elements[1].value;
	
	var pattern = /^\s*\$?\d+(,\d{3})*(\.\d{2})?\s*$/;
	
	if (input1.match(pattern))
		document.getElementById('form6').getElementsByTagName('td')[1].style.visibility = "hidden";
	else
		document.getElementById('form6').getElementsByTagName('td')[1].style.visibility = "visible";
	if (input2.match(pattern))
		document.getElementById('form6').getElementsByTagName('td')[3].style.visibility = "hidden";
	else
		document.getElementById('form6').getElementsByTagName('td')[3].style.visibility = "visible";
	
}