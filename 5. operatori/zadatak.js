var x = "Lorem ipsum",
  y = 2345,
  z = "2345";
q = false;

// 1.  Koja je vrijednost varijable trueFalse? Čemu služe dvostruki negacijski znakovi?
var trueFalse = !!"false" == !!"true";
console.log(trueFalse);
// vrijednost varijable je true
// dvostruka negacija služi da konverta vrijednost u boolean
// !"false" -> true, ali !!"false" -> false

// 2. Koju će vrijednost ispisati console.log? Zašto?
console.log(q || x || y || z);
// ispisati će Lorem ipsum (prva thruty vrijednost)
// || je logički operator koji vraća prvu thruty vrijednost, ako ona postoji, inače će vratiti zadnju falsy vrijednost

// 3. Koju će vrijednost ispisati console.log? Zašto?
var num = 6;
num--;
console.log(num);
// ipisati će 5
// -- se koristi za smanjivanje varijable za jednu vrijednost

// 4. Koju će vrijednost ispisati console.log? Zašto?
const price = 26.5;
const taxRate = 0.082;

let totalPrice = price + price * taxRate;
let newtotal = totalPrice.toFixed(2); // mora se dodati let i ovdje jer inače ne radi

console.log("Total:", newtotal);
// ispisati će 28.673000000000002

// toFixed se koristi kako bi se rezultat zaokružio na određei broj decimala
// nakon što sam napravila novu varijablu newtotal i pozvala ju, rezultat je 28,67
