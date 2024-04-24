// var - function ili global scope, moze se mijenjati

var a = 5;

console.log(a);

a = 6;

console.log(6);

// let - block scope, moze se mijenjati

let b = 1;

console.log(b);

b = 2;

console.log(b);

// const - block scope, ne moze se mijenjati

const pi = 3.14;

console.log(pi);

const arr = [1, 2, 3];

arr.push(4);

console.log(arr);

arr.pop();

console.log(arr);

// scope

{
  var y = 1;
}

console.log(y);

{
  let z = 5;
}

if (true) {
  //prvi blok
} else {
  //drugi blok
}

console.log(z);
