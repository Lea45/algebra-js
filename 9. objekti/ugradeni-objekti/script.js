// DATE
var current = new Date();
console.log(current);
console.log("Danasnji dan je: " + current.getDate());
console.log("godina je: " + current.getFullYear());
console.log("Mjesec je: " + current.getMonth() + 1);

var mjeseci = ["Sijecanje", "Veljaca", "Ozujak", "Travanj"];
console.log("trenutno je: " + mjeseci[current.getMonth()]);

var proslost = new Date("2019-02-24");
console.log(proslost);

var buducnost = new Date(2026, 3, 5, 16, 12, 15, 163);
console.log(buducnost);

console.log(buducnost.toLocaleDateString());
console.log(buducnost.toLocaleTimeString());

console.log(
  buducnost.toLocaleDateString() + " " + buducnost.toLocaleTimeString()
);

var mili = Date.now();
var datum = new Date(mili);
console.log(datum.toLocaleDateString() + " " + buducnost.toLocaleTimeString());

// MATH
var pi = Math.PI;
console.log(pi);

function opsegKruga(r) {
  return 2 * r * Math.PI;
}
console.log(opsegKruga(5));

var a = 3.14;
var b = 3.74;

// round
console.log(Math.round(a));
console.log(Math.round(b));

//ceil
console.log(Math.ceil(a));
console.log(Math.ceil(b));

//floor
console.log(Math.floor(a));
console.log(Math.floor(b));

console.log(Math.floor(-11.15));
console.log(Math.ceil(-9.53));
