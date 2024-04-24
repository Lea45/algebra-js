/* 1.
var x = "John Doe";
function vratiNesto(name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
}
var y = vratiNesto("Jane Doe");
var z = vratiNesto()();
*/
// SAMOPOZIVAJUĆA FUNKCIJA
var vratiNesto = (function (name) {
  var x = name || "John Doe"; // Postavi vrijednost x na parametar name ili na "John Doe" ako nije dostupan
  return function () {
    // Vrati anonimnu funkciju koja vraća vrijednost x
    return x;
  };
})("John Doe"); // Odmah izvrši samopozivajuću funkciju s zadanim argumentom

var y = vratiNesto("Jane Doe"); // Pristupi funkciji vratiNesto s argumentom "Jane Doe"
var z = vratiNesto(); // Pristupi funkciji vratiNesto bez argumenta

/* 
Na kraju programa, vrijednost varijable x bit će "John Doe", jer se to pridruživanje 
dogodilo izvan funkcije vratiNesto, iako je u funkciji definirana istoimena varijabla.

Vrijednost varijable z bit će "John Doe". Ovo je zato što se poziva vratiNesto() 
(bez argumenta), što znači da se unutar funkcije koristi prvotna vrijednost varijable 
x ("John Doe"), jer nije dostavljen argument. Funkcija vratiNesto() vraća funkciju f, 
a zatim se ta funkcija iznova poziva, čime se vraća trenutna vrijednost varijable x, 
koja je "John Doe".

*/
