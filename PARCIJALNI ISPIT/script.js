function search(searchTerm) {
  fetch("https://itunes.apple.com/search?term=" + searchTerm + "&entity=song")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (data) {
      if (data.results.length === 0) {
        showNoDataMessage();
      } else {
        showResults(data.results);
      }
    })
    .catch(function (error) {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function showResults(results) {
  var resultsBody = document.getElementById("resultsBody");
  resultsBody.innerHTML = "";
  results.forEach(function (result) {
    var row = document.createElement("tr");
    var artistNameCell = document.createElement("td");
    artistNameCell.textContent = result.artistName;
    row.appendChild(artistNameCell);
    resultsBody.appendChild(row);
  });
}

function showNoDataMessage() {
  var resultsBody = document.getElementById("resultsBody");
  resultsBody.innerHTML = "<tr><td>NO DATA</td></tr>";
}

document.getElementById("searchButton").addEventListener("click", function () {
  var searchTerm = document.getElementById("searchInput").value.trim();
  if (searchTerm === "") {
    showNoDataMessage();
  } else {
    search(searchTerm);
  }
});
