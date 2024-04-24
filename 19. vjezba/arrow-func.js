function returnOne() {
  return 1;
}

const a = returnOne();

console.log(a);

const firstArrowFunc = () => 1;

console.log(firstArrowFunc());

function returnParam(param) {
  return param;
}

console.log(returnParam("asd"));

const b = (p) => p;

console.log(b("asvdcihu"));

function sum(a, b) {
  const rez = a + b;
  return rez;
}

const c = (a, b) => {
  const rez = a + b;
  return rez;
};

console.log(c(1, 2));

[1, 2, 3].forEach((el) => console.log(el));
