var MathTools = {};

//A2 - B2
MathTools.a2_minus_b2 = function(a, b) {
	var x = a + b;
	var y = a - b;
	var c2 = x * y;
	return c2;
}

//A2 + B2
MathTools.a2_plus_b2 = function(a, b) {
	var x = a * a;
	var y = b * b;
	var c2 = x + y;
	return c2;
}

//Print and add the series of numbers. While calling function, enter start number and the number of numbers it should take ahead
MathTools.sakanacci = function(x, iterations) {
	var nums = [];
	var sumOfNum = 0;
	var output = "";
	while(x <= iterations) {
		nums.push(x);
		x++
	}
	for(var i = 0; i < nums.length; i++) {
		sumOfNum += nums[i];
	}
	output = "Numbers: " + nums.toString() + ". Sum of numbers: " + sumOfNum;
	return output;
}

//Factors of a numer
MathTools.factors = function(x) {
	var counter = x / 2;
	var factors = [];
	for(var i = 1; i <= counter; i++) {
		if(x % i === 0) {
			factors.push(i);
		}
	}
	factors.push(x);
	return factors.toString();
}

//Remainder Division
MathTools.integerDivision = function(dividend, divisor) {
	var output = " ";
	var quotient = Math.floor(dividend/divisor);
	var remainder = dividend % divisor;
	output = "Quotient = " + quotient + ", Remainder = " + remainder;
	return output;
}

//Function to check whether number is odd or even
MathTools.checkOddEven = function(x) {
	var output = " ";
	if(x % 2 == 0) {
		output = x + " is an even number";
	} else {
		output = x + " is an odd number";
	}
	return output;
}

//Reverse a number
MathTools.reverse = function(x){
	var t = x;
	var r = 0;
	while(t != 0) {
		r = r * 10;
		r = r + t % 10;
		t = Math.floor(t / 10);
	}
	return r;
}

//Printing Prime Numbers in a range 
MathTools.prime = function(start, end) {
	var x;
	var primeNumbers = [];
	var startNum = start || 1;
	var endNum = end || 100;
	while(startNum <= endNum) {
		x = true;
		for(var i = 2; i < startNum; i++) {
			if(startNum % i === 0) {
				x = false;
				break;
			}
		}
		if(x === true){
			primeNumbers.push(startNum);
		}
		startNum++;
	}
	return primeNumbers.toString();
}	

//Printing a specific number in the fibonacci series
MathTools.fibonacci = function(number, fNum, sNum) {
	var firstNum = fNum || 0;
	var secNum = sNum || 1;
	var next;
	for(var i = 1; i<number-1; i++) {
		next = firstNum + secNum;
		firstNum = secNum;
		secNum = next;
	}
	return next;
}

//Function to create an exponent
MathTools.exponent = function(base, exponent) {
	var pow = 1;
  	for(var i=0; i<exponent; i++){
    	pow = pow*base;
  	} 
  	return pow;
}

//Function to create a tetration
MathTools.tetration = function(base, tetration) {
	var i, j, tetraVal = 1;
	for(i=0; i<tetration; i++) {
		var temp = 1;
		for(j=0; j<tetraVal; j++) {
			temp = temp * base;
		}
		tetraVal = temp;
	}
	return tetraVal;
}

//Function to convert fraction to percent
MathTools.fractionToPercent = function(numerator, denominator) {
	var percent = numerator / denominator * 100;
	return percent + "%";
}

//Function to convert decimal to percent
MathTools.decimalToPercent = function(decimal) {
	var percent = decimal * 100;
	return percent + "%";
}

//Function to convery percent value to decimal
MathTools.percentToDecimal = function(percent) {
	var decimal = percent / 100;
	return decimal;
}