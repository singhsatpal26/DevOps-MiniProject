/**
 * 
 */

function squareRoot()
{
	num = document.getElementById("number").value;
	document.getElementById("result").innerHTML = Math.sqrt(num);
}

function factorial()
{
	num = document.getElementById("number").value;
	if(num < 0 || isNaN(num.value))
	{
		document.getElementById("result").innerHTML = NaN;
	}
	else if(num.value == 0)
	{
		document.getElementById("result").innerHTML = 1;
	}
	else
	{

			fact = 1;
			for(i=1; i<=num.value; i++)
			{
				fact = fact * i;
			}
			document.getElementById("result").innerHTML = fact;
	}
}

function log()
{
	num = document.getElementById("number").value;
	document.getElementById("result").innerHTML = Math.log(num);
}

function power()
{
	num = document.getElementById("number").value;
	power_number = document.getElementById("power_number").value;
	document.getElementById("result").innerHTML = Math.pow(num, power_number);
}