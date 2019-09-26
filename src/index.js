module.exports = function zeros(expression) {

  var numOf_2 = 0;
  var numOf_5 = 0;


  //factorization
  function factorization(num, inc) {
    var i;
    for (var j = num; j > 0; j -= inc) {
      i = j;
      while (i % 2 == 0) {
        numOf_2++;
        i /= 2;
      }
      while (i % 5 == 0) {
        numOf_5++;
        i /= 5;
      }
    }
  }

  //parsing input expression
  function processor(elem) {
    (elem.split("!").length == 2) ? factorization(parseInt(elem), 1) : factorization(parseInt(elem), 2);
  }


  //main
  expression.split("*").forEach(processor);

  return (numOf_5 > numOf_2) ? numOf_2 : numOf_5;
}
