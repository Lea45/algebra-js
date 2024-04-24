var container = document.createElement("div");
container.innerHTML = "<h2 id='subtitle'> Booook</h2>";

var mainTitle = document.getElementById("title"); // on vraca element ili nista, za elementS nam treba []
mainTitle.after(container);

var span = document.createElement("span"); // span je rijec iz htmla pa zato ga mozemo koristiti

// direktno postavljanje klase
span.className = "text text--error";
span.textContent = "Ja sam mala poruka hihihi";
container.after(span);
console.log(span);
console.log(span.className);
console.log(span.classList);

// dodavanje klase metodom
span.classList.add("text-new");
console.log(span.className);

// uklanjanje klase metodom
span.classList.remove("text--error");
console.log(span.className);

// inline style
console.log(span.style);
span.style.backgroundColor = "#a133d5";
span.style.borderTopLeftRadius = "16px";
span.style.border = "5px solid green";
