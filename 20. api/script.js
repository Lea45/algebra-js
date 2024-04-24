function clear() {
  var cont = document.getElementById("user-list");
  cont.innerHTML = "";
}

function getAll() {
  var request = new XMLHttpRequest();

  request.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  request.onload = function () {
    if (request.status === 200) {
      var data = JSON.parse(request.responseText);
      const list = document.getElementById("user-list");
      data.forEach((user) => {
        let li = document.createElement("a");
        li.innerText = user.name;
        li.href = `http://127.0.0.1:5500/api/user.html?userId=${user.id}`;
        list.appendChild(li);
      });
    } else {
      alert("Error!");
    }
  };

  request.send();
}

getAll();

function getSingle() {
  var requestSearch = new XMLHttpRequest();

  var inputValue = document.getElementById("input").value;

  requestSearch.open(
    "GET",
    `https://jsonplaceholder.typicode.com/users?username=${inputValue}`,
    true
  );

  requestSearch.onload = function () {
    if (requestSearch.status === 200) {
      var data = JSON.parse(requestSearch.responseText);
      const list = document.getElementById("user-list");
      data.forEach((user) => {
        let li = document.createElement("a");
        li.innerText = user.name;
        li.href = `http://127.0.0.1:5500/api/user.html?userId=${user.id}`;
        list.appendChild(li);
      });
    } else {
      alert("Error!");
    }
  };

  requestSearch.send();
}

function search() {
  clear();
  document.getElementById("input").value ? getSingle() : getAll();
}
