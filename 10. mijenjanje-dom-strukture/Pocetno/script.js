// Umetanje novog diva ispod diva sa klasom "description"
var descriptionDiv = document.querySelector(".description");
var newDiv = document.createElement("div");
newDiv.textContent = "Novi div ispod description diva";
descriptionDiv.parentNode.insertBefore(newDiv, descriptionDiv.nextSibling);

// Dodavanje 5 praznih li elemenata u listu u footer elementu
var footerList = document.querySelector("footer ul");
for (var i = 0; i < 5; i++) {
  var li = document.createElement("li");
  footerList.appendChild(li);
}
