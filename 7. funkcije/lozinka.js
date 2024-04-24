// 1. Napisati funkciju za provjeru ispravnosti passworda:
// ispravan password mora imati vise od 8 znakova i svaki mora biti broj
var dobro = "1234567890";
var lose = "11r2v34a56";
var jedinstveniZnakovi = function (password) {
  if (password.lenght < 8) {
    return "Lozinka mora imati više od 8 znakova";
  }

  for (var i = 0; i < password.length; i++) {
    if (isNaN(password[i])) {
      return "Lozinka smije sadržavati samo brojeve";
    }
  }

  return "Lozinka je ispravna";
};

console.log(jedinstveniZnakovi(dobro));
console.log(jedinstveniZnakovi(lose));
