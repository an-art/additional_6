module.exports = function zeros(str) {
  var arr = [];
  var count = 0;
  var b;

  if (str.includes('*')) arr = str.split("*");
  else arr = [str];
  for (var i=0; i<arr.length; i++) {
    if (arr[i].endsWith('!!')) {
      arr[i] = arr[i].slice(0, -2);
      b = +arr[i];
      while (b>4) {
        if (b%5 === 0) count++;
        b -= 2;
      }
    } else {
      arr[i] = arr[i].slice(0, -1);
      for (var j=5; arr[i]/j>=1; j*=5) {
        count += Math.floor(arr[i]/j);
      }
    }
  }
  return count;
}
