// brojevi
var prviBroj = 55;
var drugiBroj = 0.65342;
var treciBroj = -72.625173;

var recenica = "Ana voli Milovana"; // string mozemo prepoznati po jednostrukim ili dvostrukim navodnicima

//boolean --> true ili false (jedine dvije opcije)
var istina = true;
var laz = false;

// typeof operator
console.log(typeof drugiBroj);
console.log(typeof recenica);
console.log(typeof laz);

console.log("5" + 3);
console.log("5" - 3);

var prva = "nesto";
var druga = " sad";
var treca = " onda";
var rez = prva + druga + treca;
console.log(rez);

var a = "prvo slovo abecede",
  b = 370,
  c = true,
  d,
  e = false;

console.log(typeof d);

b += 2; // skraceno za b = b +2;
console.log(b);

var komplikacija = b + +("22" + "11") + 5 + +("1" + 1);
console.log(komplikacija);
