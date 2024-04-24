var obj = {
  ime: "Lea",
  godiste: 2000,
  posao: {
    primarni: "odgajatelj",
    sekundarni: "fitness trener",
  },
  pozdravi: function (a) {
    console.log("Bok ekipa cujemo li se ");
    return a;
  },
  "nesto random": "bok",
  mojPosaoJe: "asd",
};

console.log(obj["nesto random"]);
console.log(obj.posao.primarni);
obj.pozdravi();
var vrijednost = obj.pozdravi(1);
console.log(vrijednost);

delete obj.godiste;
console.log(obj);
