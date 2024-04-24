var request = new XMLHttpRequest();

var userId = window.location.href.split("=")[1];

console.log(userId);

request.open(
  "GET",
  `https://jsonplaceholder.typicode.com/users/${userId}`,
  true
);

request.onload = function () {
  if (request.status === 200) {
    var data = JSON.parse(request.responseText);
    const container = document.getElementById("container");
    for (const prop in data) {
      var p = document.createElement("p");
      p.innerHTML = `<b>${prop}:</b> ${data[prop]}`;
      container.appendChild(p);
    }
  } else {
    alert("Error!");
  }
};

request.send();
