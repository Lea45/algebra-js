// 1. Postavljanje teksta "Karlovac" u h1 element
var mainTitle = document.getElementsByTagName("h1")[0];
mainTitle.textContent = "Karlovac";
document.body.prepend(mainTitle);

// 2. Zamjena span elementa u description div-u s h3 elementom
var descriptionDiv = document.getElementsByClassName("description")[0]; // Dohvati <div> element s klasom "description"
var spanElement = descriptionDiv.getElementsByTagName("span")[0]; // Dohvati <span> element unutar <div> elementa
spanElement.textContent = "5 rijeka"; // Promijeni tekst unutar <span> elementa na "5 rijeka"

// 3. Dodavanje teksta "Peta rijeka je piva." u div s klasom "info"
var info = document.getElementsByClassName("info")[0]; // Dobij prvi element s klasom "info"
info.textContent = "Peta rijeka je piva."; // Postavi tekst sadržaja na "Peta rijeka je piva."
document.div.prepend(info); // Stavi element na početak tijela dokumenta

// 4. Dodavanje 5 Karlovačkih rijeka u li elemente u footer listi NE RADI
// Definirajte sve karlovačke rijeke
var karlovackeRijeke = ["Kupa", "Korana", "Mrežnica", "Dobra", "Šanjevica"];

// Dohvati <footer> element
var footer = document.getElementById("footer");

// Dohvati <ul> element unutar <footer>
var ulElement = footer.getElementsByTagName("ul")[0];

// Dohvati sve <li> elemente unutar <ul>
var listItems = ulElement.getElementsByTagName("li");

// Postavi tekst svakog <li> elementa na ime karlovačke rijeke
for (var i = 0; i < karlovackeRijeke.length; i++) {
  listItems[i].textContent = karlovackeRijeke[i];
}
