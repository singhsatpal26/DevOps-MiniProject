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
	if(isNaN(num))
	{
		document.getElementById("result").innerHTML = NaN;
	}
	else
	{
		if(isInt(num))
		{
			if(num == 0)
			{
				document.getElementById("result").innerHTML = 1;	
			}
			else if (num < 0)
			{
				document.getElementById("result").innerHTML = NaN;
			}
			else
			{
				fact = 1;
				for(i=1; i<=num; i++)
				{
					fact = fact * i;
				}
				document.getElementById("result").innerHTML = fact;
			}
		}
		else
		{
			document.getElementById("result").innerHTML = NaN;
		}
	}
}

function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
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