function inlineLog() {
  console.log("Bok iz funkcije");
}

var btn2 = document.getElementById("btn2");
btn2.onclick = function () {
  console.log("Ovo je drugi slucaj kada imamo u JS-u");
};

var btn3 = document.getElementById("btn3"); // prvo uvijek dohvacamo element
function odgovor() {
  console.log("odgovaram ti :)");
}
btn3.addEventListener("click", odgovor);

var input = document.getElementById("inp");
input.onkeyup = function () {
  console.log(input.value);
};

var p = document.getElementById("par");
var submitBtn = document.getElementById("set");

submitBtn.onclick = function () {
  p.innerText = input.value;
};

// Na klik buttona POSTAVI, dohvatiti vrijednost iz inputa i dodati novi li (list item) unutar liste

var ul = document.getElementById("list");

for (var i = 0; i < 5; i++) {
  var li = document.createElement("li");
  li.innerText(i + 1).toString();
  ul.appendChild(li);
}

var divOutter = document.getElementById("a");
var divInner = document.getElementById("b");
var button = document.getElementById("c");

divOutter.onclick = function () {
  // placanje
  console.log("Klik a");
};

divInner.onclick = function () {
  // placanje
  console.log("Klik b");
};

button.onclick = function (event) {
  // placanje
  console.log("Klik c");
  event.stopPropagation();
};
