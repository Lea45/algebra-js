// logicki - da bi rezultat bio true, sve mora biti true
var istina = true;
var laz = false;

console.log(istina && laz && istina);
console.log(istina || laz);
console.log(!(istina || laz) || (laz && laz && istina));

//aritmeticki
var prvi = 5;
var drugi = 17;

console.log(prvi);
console.log(++prvi); // prvo poveca za 1 pa ispise
console.log(prvi++); // prvo ispise pa tek onda poveca za 1
console.log(prvi);

var modulo = drugi % 5; // pokazuje ostatak od dijeljenja
console.log("Ostatak dijeljenja iznosi:", modulo);

// relacijski
var realNumber = 10;
var fakeNumber = "10";
var netkoTreci = 25;

console.log(realNumber == fakeNumber); // provjerava samo vrijednost
console.log(realNumber === fakeNumber); // provjerava i tip i vrijednost - tip nije isti

console.log(realNumber != fakeNumber); // provjerava jesu li razliciti po vrijednosti
console.log(realNumber !== fakeNumber); // provjerava razlicitost po tipu i vrijednosti

console.log(realNumber > netkoTreci);
console.log(realNumber < netkoTreci);
console.log(realNumber >= netkoTreci);
console.log(realNumber <= netkoTreci);

console.log(
  (!(realNumber <= netkoTreci) && realNumber == netkoTreci) ===
    (istina && !laz && istina)
);
