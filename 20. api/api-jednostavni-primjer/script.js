var req = new XMLHttpRequest();

req.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

req.onload = function () {
  var posts = JSON.parse(req.responseText);
  console.log(posts);
};

req.send();
