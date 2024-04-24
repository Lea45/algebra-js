// 1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.
let broj = 3;

while (broj <= 20) {
  if (broj % 9 !== 0) {
    console.log(broj);
  }
  broj++;
}

// 2. Koja je vrijednost isprintana u konzoli?
var varOne = 0;
for (i = 0; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    varOne++;
  }
}
console.log(varOne);

// ispisana je vrijednost 16
// unutar dvije petlje, for se izvršava 16 puta
// prva petlja i se izvršava 4 puta (0, 1, 2, 3), a svaki put kada se izvršava, druga petlja j se izvršava 4 puta i zbog toga, varijabla varOne se povećava 16 puta
