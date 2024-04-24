// if - else

var prekidac = false;
if (prekidac) {
  console.log("radi");
} else {
  console.log("ne radi");
}

var trenutniOdabir = 5;

if (trenutniOdabir === 1) {
  console.log("prvi");
} else if (trenutniOdabir === 2) {
  console.log("drugi");
} else if (trenutniOdabir === 3) {
  console.log("treci");
} else {
  console.log("nijedan uvjet nije ispunjen");
}

// switch
switch (trenutniOdabir) {
  case 1:
    console.log("prvi");
    break;
  case 2:
    console.log("drugi");
    break;
  case 3:
    console.log("treci");
    break;
  default:
    console.log("nijedan uvjet nije ispunjen");
}

//PETLJE

// while

var count = 10;

while (count > 0) {
  console.log(count);
  count--;
}

// do - while
var doCount = 0;

do {
  console.log(doCount);
  doCount++;
} while (doCount < 10);

var brojac = 11;

while (brojac < 10) {
  console.log("while");
  brojac++;
}

var brojacDo = 11;

do {
  console.log("Do-While");
  brojacDo++;
} while (brojacDo < 10);

//for
for (var i = 0; i < 10; i++) {
  console.log(i);
}

for (var i = 0 < 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (var i = 0; i < 5; i++) {
  if (i == 2) {
    continue;
  }
  console.log(i);
}

console.log("Break");

for (var i = 0; i < 5; i++) {
  if (i === 2) {
    break;
  }
  console.log(i);
}
