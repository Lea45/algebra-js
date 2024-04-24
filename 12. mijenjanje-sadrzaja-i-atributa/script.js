var body = document.getElementsByTagName("body");
console.log(body); // ovo je cisto za nasu provjeru da vidimo jesmo ga dohvatili

// kreiranje varjable i dodavanje u body
var mainTitle = document.createElement("h1");

mainTitle.textContent = "Mijenjanje sadrzaja i atributa";
body[0].prepend(mainTitle);
/* 
element mozemo dodati samo na neki drugi element
0 zato sto je samo jedan body
da imamo li npr onda bi mogli staviti iz koje li zelimo 

var lista = document.getElementsByTagName("ul");
console.log(lista);

var nesto = document.getElementsByTagName("lea");
console.log(nesto);
*/

var subtitle = document.createElement("h2");
subtitle.innerText = "Postavljanje kontenta";
// subtitle.innerText = mainTitle.textContent; dobili bi isti sadrzaj kao i h1
// INNER TEXT VRACA SAMO VISIBLE TEXT
mainTitle.after(subtitle); // dodaje element nakon elementa na istoj razini

//POSTAVLJANJE HTML-A UNUTAR ELEMENTA
// DODAVANJE DIV-A I TEKSTA UNUTAR NJEGA
var container = document.createElement("div");
container.innerHTML = "<span>Ovo je <b> primjer </b> </span>";
subtitle.after(container);

// SLIKA
var img = document.createElement("img");
img.src =
  "https://cdn.britannica.com/05/155405-050-F8969EE6/Spring-flowers-fruit-trees-bloom.jpg";
img.alt = " Slika proljeca"; // POSTAVLJANJE VRIJEDNOSTI ATRIBUTA METODOM
container.append(img);
img.setAttribute("width", "250px"); // style POSTAVLJANJE VRIJEDNOSTI ATRIBUTA METODOM
var imageWidth = img.getAttribute("width"); // DOHVACANJE VRIJEDNOSTI ATRIBUTA METODOM
console.log(imageWidth);

// UKLANJANJE ATRIBUTA METODOM
img.removeAttribute("alt");

console.log(img.src);
console.timeLog(img.getAttribute("src"));
