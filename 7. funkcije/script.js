var a = 2;
var b = 5;

/*
function sum() {
  var rez = 1 + 2;
  return rez; // ako nema return, vratit ce undefined (default), ako zelimo da vrati đ
  neku vrijednost moramo koristiti return
}
console.log(sum());
*/

function sum(first, second) {
  var rez = first + second;
  return rez;
}
console.log(sum(a, b));

function iterateAndReturnOddOrEvenElements(arr, handler) {
  var oddElements = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      oddElements.push(arr[i]);
    }
  }
  return oddElements;
}
console.log(iterateAndReturnOddOrEvenElements([1, 2, 3, 4, 5, 6, 7, 8], 0));
console.log(iterateAndReturnOddOrEvenElements(["asd", "asdasd", "agggreg"], 1));
console.log(iterateAndReturnOddOrEvenElements([1, "drugi", false, [], 2], 1));

function opsegTrokuta(a, b, c) {
  return a + b + c;
}
var jednakostranican = opsegTrokuta(2, 2, 2);
var jednakokracan = opsegTrokuta(2, 2, 4);
var raznostranican = opsegTrokuta(1, 2, 3);
console.log(jednakokracan, jednakostranican, raznostranican);

function kvadriraj(a) {
  var kvadrat = a * a;
  return kvadrat; // nakon returna ne ide nista
  // kvadrat a*a;  ovo se nikad nece izvesti jer nakon returna sto si pozvao si pozvao
}
console.log(kvadriraj(2));

var povrsinaPravokutnika = function (a, b) {
  return a * b;
};
console.log(povrsinaPravokutnika(2, 5));

function funkcijaSDefaultnomVrijednoscu(arr, handler = 0) {
  var oddElements = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === handler) {
      oddElements.push(arr[i]);
    }
  }
  return oddElements;
}
console.log(funkcijaSDefaultnomVrijednoscu([1, 2, 3, 4, 5]));
console.log(funkcijaSDefaultnomVrijednoscu([1, 2, 3, 4, 5], 0));
console.log(funkcijaSDefaultnomVrijednoscu([1, 2, 3, 4, 5], 1));
