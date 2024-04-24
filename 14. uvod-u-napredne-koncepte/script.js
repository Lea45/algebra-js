var broj = 123;
var text = "123";

console.log(typeof Number(text));
console.log(typeof String(broj));

var brojToText = broj.toString();

console.log(brojToText, typeof brojToText);

var prviBroj = "123.32487263845";
var drugiBroj = "ff";

console.log(parseInt(prviBroj));
console.log(parseInt(drugiBroj, 16));
console.log(typeof parseFloat(prviBroj));

var x = 2;

function test() {
  var x = 4;

  console.log("u funkciji", x);
}

test();

console.log(x);

console.log("test ispis: ", test());

var covjek = {
  ime: "Marko",
  prezime: "Marulic",
  godiste: "1450.",
  predstaviSe: function () {
    return (
      "Ja sam " +
      this.ime +
      " " +
      this.prezime +
      ". Rodjen sam " +
      this.godiste +
      " godine."
    );
  },
};

console.log(covjek.predstaviSe());
