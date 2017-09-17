module.exports = function zeros(expression) {
  var arr = expression.split('');
  var a, fac;
  
  for (var i = arr.length-1; i >= 0; i--) {
  	if (arr[i] === '!' && arr[i-1] === '!') {
  		a = +arr.slice(0, i-1).join('');
  		fac = factorial2(a);
  		return count_zeros(fac);
  	}
  	else {
  		a = +arr.slice(0, i).join('');
  		fac = factorial(a);
  		return count_zeros(fac);
  	}
  }
  function factorial(n) {
  	return n ? n * factorial(n - 1) : 1;
  }

  function factorial2(n) {
  	return (n!=1 && n) ? n * factorial2(n - 2) : 1;
  }
  function count_zeros(n) {
  	var count = 0;
  	while (n%10 === 0) {
		n = n/10;
		count++;
    }
  	return count;
  }
}
//проверить есть ли *, если да, то разбить на массив по *