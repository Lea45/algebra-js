// kao varijabla
function sum(a, b) {
  return a + b;
}
var rez = sum;
console.log(rez);

var pozivRez = sum(2, 3);
console.log(pozivRez);

var minus = function (a, b) {
  return a - b;
};
console.log(minus(3, 2));

// kao argument druge funkcije
function vartiUvecanBroj(func, broj) {
  // nazive dajemo proizvoljno, ovdje moze pisati miki i maus, ali dajemo nazive tako da namo sta trebamo predati
  var rez = func(broj);
  return rez + 1;
}

function vratiModulo(x) {
  return x % 2;
}

function random(x) {
  let a = x * x + 2;
  return x;
}

var rezArg = vartiUvecanBroj(vratiModulo, 4);
var rezArg1 = vartiUvecanBroj(random, 5);

console.log(rezArg);
console.log(rezArg1);

// kao vracena vrijednost
function proslijedi(n) {
  return function () {
    return function () {
      return function () {};
    };
    return n;
  };
}
var nn = proslijedi(5)();
console.log(nn);

function pozdravi() {
  console.log("Hej booook ihaaaaaaaojaaaaoooo");
}
pozdravi();

// SAMOPOZIVAJUCA ANONIMNA FUNKCIJA
(function () {
  console / log("Ja sam anonimac");
})();
