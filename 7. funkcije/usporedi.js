function usporediDvaBroja(a, b) {
  if (a < b) {
    return "Drugi broj je veci";
  } else if (a > b) {
    return "Prvi broj je veci";
  } else {
    return "Brojevi su jednaki";
  }
}

var rezultat = usporediDvaBroja(8, 4);
console.log(rezultat);

function nadodajNaBroj(a, b) {
  return a + b;
}
console.log(nadodajNaBroj(2, 5));
console.log(nadodajNaBroj(2));
