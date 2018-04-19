let add = function () {
  let sum = 0;
  return function calculate(a) {
    sum += a;
    calculate.toString = function () {
        return sum;
    };
    return calculate;
  }
}();
console.log(add(1)(6)(-3).toString());