var addButton = document.getElementById("button");
var inputField = document.getElementsByName("ListItem")[0];
var categorySelect = document.getElementById("categorySelect");
var posaoList = document.getElementById("posaoList");
var kucaList = document.getElementById("kucaList");
var osobnoList = document.getElementById("osobnoList");

addButton.addEventListener("click", function () {
  var toAdd = inputField.value.trim();
  var selectedCategory = categorySelect.value;

  if (toAdd !== "") {
    var listItem = document.createElement("li");
    listItem.textContent = toAdd;

    // Odredi odgovarajuću listu na temelju odabrane kategorije
    var targetList;
    switch (selectedCategory) {
      case "posao":
        targetList = posaoList;
        break;
      case "kuća":
        targetList = kucaList;
        break;
      case "osobno":
        targetList = osobnoList;
        break;
      default:
        targetList = osobnoList;
    }

    targetList.appendChild(listItem);

    inputField.value = "";
  }
});

document.querySelectorAll(".column ol").forEach((list) => {
  list.addEventListener("dblclick", function (event) {
    var listItem = event.target;
    if (listItem.tagName === "LI") {
      listItem.classList.toggle("strike");
      if (listItem.classList.contains("strike")) {
        list.appendChild(listItem);
      }
    }
  });
});
