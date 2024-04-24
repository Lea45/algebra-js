var auto = require("./car");

console.log("Inicijalno stanje sata: " + auto.vratiKilometrePresao());
auto.vozi(600);

console.log("Nakon Zadra: " + auto.vratiKilometrePresao());
auto.vozi(275);

console.log("Nakon Ljubljane: " + auto.vratiKilometrePresao());
auto.vozi(684);

console.log("Nakon Budimpeste: " + auto.vratiKilometrePresao());

var prosjecnaBrzina = auto.vratiProsjecnuBrzinu(2456);

console.log("Prosjecna brzina je : " + prosjecnaBrzina.toFixed(2) + "km/h");
