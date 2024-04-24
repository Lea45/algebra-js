var mojPrviNiz = [1, 2, 3];

console.log(mojPrviNiz);

console.log("Element na indeksu 1: ", mojPrviNiz[1]);

console.log("Duljina niza je: ", mojPrviNiz.length);

var mix = [1, "drugi", false, , [1, 2, "5"]];
console.log(mix.length);
console.log(mix);
console.log(mix[3]);
console.log(mix[123]); // za duljinu gleda samo ono sto smo mi definirali

var edit = [1, "dva", true];
console.log(edit);
edit[1] = "nova vrijednost";
console.log(edit);
edit = ["bla", 22, []];
console.log(edit);

var nekiElement = edit[1];
console.log(nekiElement);

var jednodimenzionlaniNiz = [1, 2, 3, 4, 5, 6, "asd", "asdas", false];
console.log(jednodimenzionlaniNiz[2]);

var dvodimenzionalniNiz = [
  [1, 2],
  [3, 4],
];
console.log(dvodimenzionalniNiz[1]);

var trodimenzionalniNiz = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, [12, 13, 14, 15, 16]],
  ],
];
console.log(trodimenzionalniNiz[0][1][1]); //5
console.log(trodimenzionalniNiz[1][0][2]); //9
console.log(trodimenzionalniNiz[1][1][2][2]); //14

var funkcijeZaArr = ["Ivica", "Marica", "Hlapic"];
console.log(funkcijeZaArr);
funkcijeZaArr.push("Gita"); // dodaje element na kraj niza
console.log(funkcijeZaArr);
funkcijeZaArr.pop(); // brise zadnji element, bezparametarstka funkcija, ne predajemo joj nista
console.log(funkcijeZaArr);
console.log(funkcijeZaArr.reverse()); // reverse ne prima nmista, okrene poredak elemenata u nizu (zrcali)

// iteracija putem for-a
for (var i = 0; i < funkcijeZaArr.length; i++) {
  console.log(funkcijeZaArr[i]);
}

// iteracija putem forEach-a
funkcijeZaArr.forEach(function (mojJedanElement) {
  console.log(mojJedanElement);
});

// razlika for-in i for-of
for (var el in funkcijeZaArr) {
  console.log(el);
} // prolazi kroz keyeve (koje nazivamo proizvoljno) koji su zapravo indeksi, ISPISUJE KEYEVE

for (var el of funkcijeZaArr) {
  console.log(el);
} // ISPISUJE VRIJEDNOSTI

// for in ali da ispisuje vrijednosti
for (var el in funkcijeZaArr) {
  console.log(funkcijeZaArr[el]);
}
