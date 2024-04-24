// dohvacanje elemenata
// var container = document.getElementById("container");
console.log(container);
console.log(document.getElementsByTagName("ul"));
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("list-item"));
console.log(document.querySelector("#list"));

// kreiranje i dodavanje novih elemenata
var container = document.getElementById("container");
var p = document.createElement("p");

container.appendChild(p);

var ol = document.createElement("ol");
container.appendChild(ol);

for (var i = 0; i < 5; i++) {
  var li = document.createElement("li");
  ol.appendChild(li);
}

// uklanjanje elemenata
var title = document.getElementById("title");
title.remove();

// kreiranje i dodavanje
var img = document.createElement("img");
container.append(img);

var span = document.createElement("span");
container.prepend(span);

var h2 = document.createElement("h2");
container.after(h2);

var audio = document.createElement("audio");
container.insertAdjacentElement("beforebegin", audio);
