var str = "STRING"; // DULJINA STRINGA == 6
// indeks 0 -- S
// indeks 1 -- T
// indeks 2 -- R
// indeks 3 -- I
// indeks 4 -- N
// indeks 5 -- G

// zadnji indeks = duljina - 1

var emptyString = ""; // ako je izmedu razmak, onda nije prazan

var myString = "                                  bla bla bla pricas bezveze";

// konkatenacija (spajanje 2 ili vise strinogova)
var prviDio = "Ja ";
var drugiDio = "sada";
var treciDio = " slusam.";

var recenica = prviDio + drugiDio + treciDio;
console.log(recenica);

// backslash
var pizzeria = "Rico's pizza"; // stavljamo \ jer js ne moze prepoznati navodnike unutar navodnika Rico\'s pizza (formater ih onda sejva kako treba)

// metode za rad sa stringovima
console.log(pizzeria.length); // dohvacanje duljine stringa (broji se i ' i razmak)
console.log(pizzeria.charAt(4)); // govori koji string se nalazi na odredenom indeksu

var noSpaces = myString.trim(); // uklanja razmak na pocetku i na kraju, ali ne i izmedu rijeci
console.log(noSpaces);

console.log(noSpaces.toUpperCase()); // pretvara sva slova u velika

console.log(pizzeria.replace("Rico's", "Lea's")); // zamjena stringa sa izrazom kojega mi navedemo
