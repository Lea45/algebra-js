// deklaracija varijable
var varijabla;
var _varijabla22;
var $varijabla_$var;

// inicijalizacija vrijednosti
varijabla = 2; // uzima se zadnja inicializacija, tako da ovo više ne vrijedi
_varijabla22 = 22;
$varijabla_$var = 222;

varijabla = "Srijeda";

console.log(varijabla);

// deklaracija i inicijalizacija u istoj izjavi
var mojaVarijabla = "Kad ce taj petak";

/* Ja
sada pisem 
blok komentar  
ALT SHIFT A kako bismo zakomentirali blok*/

var nekaVarijabla;
console.log(nekaVarijabla);

// deklaracija vise varijabli unutar iste izjave
var mama, tata, braco, seka;

if (varijabla == 2) console.log("OK"); // ovo nece raditi jer je zadnja inicijalizacija varijable bila srijeda

if (_varijabla22 == "hej") {
  console.log(5);
  $varijabla_$var = 55;
}

var a = 2;
var b = 3;
var c = a + b;
console.log(c);

var d = c;
console.log(d);

var posto = 10;
var valuta = "euro";

var drzava = "hrvatska";

// = -> pridruzivanje vrijednosti
// -- == ili === -> provjera jednakosti

var price = 0.5;
console.log(price);
