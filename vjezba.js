// VARIJABLE
var a; // deklaracija
a = 5; // inicijalizacija varijable
a = 7;
a = 22;
console.log(a); // zadnja inicijalizacija (22)

var b = 37; // deklaracija i inicijalizacija u istoj izjavi

var nesto;
console.log(nesto); //undefined jer nismo inicijalizirali

var l, e, a; // deklaracija više varijabli unutar iste izjave

var c = a + b;
console.log(c);

// TIPOVI PODATAKA
var j = "JS", // string
  k = 38, // number
  nj = true, // boolean
  ž; // undefined

console.log(typeof nj); // provjera tipa podatka

// UNARNI PLUS
var komplikacija = k + +("22" + "11") + 5 + +("1" + 1);
console.log(komplikacija);
// 38 + (2211) + 5 + (11)
// 2265

// LOGIČKI OPERATORI
var istina = true;
var laz = false;
console.log(istina && laz && istina); // false
console.log(istina || laz); // true
console.log(!(istina || laz) || (laz && laz && istina));
// !(true)  || (false) -> false ili false -> false

// ARITMETIČKI OPERATORI
var a = 5;
var b = 7;
console.log(a);
console.log(++a); // 5
console.log(a); // 6
console.log(a++); // 6

// RELACIJSKI ILI OPERATORI USPOREDBE
var realNumber = 10;
var fakeNumber = "10";
var netkoTreci = 25;
console.log(realNumber == fakeNumber);
console.log(realNumber === fakeNumber);
console.log(realNumber != fakeNumber);
console.log(realNumber !== fakeNumber);

console.log(
  (!(realNumber <= netkoTreci) && realNumber == netkoTreci) ===
    (istina && !laz && istina)
);
// !(true) && false === true -> false + false === true -> false === true -> FALSE

// KONTAKTENACIJA
var prviDio = "Ja ";
var drugiDio = "sada";
var treciDio = " kodiram.";
var recenica = prviDio + drugiDio + treciDio;
console.log(recenica);

// METODE ZA RAD SA STRINGOVIMA
var pizzeria = "   Rico's pizza   ";
console.log(pizzeria.length);
var noSpaces = pizzeria.trim();
console.log(noSpaces);
console.log(noSpaces.toUpperCase());
console.log(pizzeria.replace("Rico's", "Lea's"));

// IF NAREDBA
var godine = 20;
if (godine > 18) {
  console.log("Punoljetna osoba!");
}
var godina = 17;
if (godina > 18) {
  console.log("Nije punoljetna osoba!");
} // ne izvršava se ako je rezultat false

// IF-ESLE NAREDBA
var god = 20;
if (god > 18) {
  console.log("Punoljetna osoba!");
} else {
  console.log("Maloljetna osoba!");
}

var godd = 16;
if (godd > 18) {
  console.log("Punoljetna osoba!");
} else {
  console.log("Maloljetna osoba!");
}

// SWITCH
var ocjena = "3";
switch (ocjena) {
  case "5":
    console.log("Ocjena izvrstan.");
    break;
  case "4":
    console.log("Ocjena vrlo dobar.");
    break;
  case "3":
    console.log("Ocjena dobar.");
    break;
  case "2":
    console.log("Ocjena dovoljan.");
    break;
  case "1":
    console.log("Ocjena nedovoljan.");
    break;
  default:
    console.log("Nepostojeća ocjena.");
}

// FOR PETLJA
var x;
console.log("Početak petlje!");
for (x = 1; x <= 5; x++) {
  console.log("Trenutno stanje broja: " + x);
}
console.log("Završetak petlje!");

// WHILE PETLJA
var count = 10;
while (count > 0) {
  console.log(count);
  count--;
}

// DO-WHILE PETLJA
var doCount = 0;
do {
  console.log(doCount);
  doCount++;
} while (doCount < 10);

// FUNKCIJE
function zbroj(a, b) {
  return a + b;
}
var rezultat = zbroj(3, 4);
console.log("Rezultat zbroja je: " + rezultat);

// ispisivanje samo parnih brojeva
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
