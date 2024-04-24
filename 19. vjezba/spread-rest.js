// ...

const arr = ["Ivica", "Marica", "Janica"];

console.log(arr);
console.log(...arr);

function provjeriIspis(prvo, drugo, trece) {
  console.log(prvo);
  console.log(drugo);
  console.log(trece);
}

provjeriIspis(arr);
provjeriIspis(...arr);

let a = {
  prvi: 1,
  drugi: 2,
};

let b = {
  treci: 3,
  cetvrti: 4,
};

let c = { ...a, ...b, peti: 5 };

console.log(c);

let d = { a, be: b, peti: 5 };

console.log(d);

let z = [1, 2, 3];
let y = [4, 5, 6];

let x = [...z, ...y];
console.log(x);

// ...
function ispisiImena(...imena) {
  console.log(imena);
  imena.forEach((el) => {
    console.log(el);
  });
}

ispisiImena(arr, 1, 4, "asdasd");
