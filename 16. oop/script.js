function Dog() {
  this.hasSat = false;
  this.bark = function () {
    console.log("Vau Vau");
  };
  this.doSit = function () {
    this.hasSat = true;
  };
}

var pekinezer = new Dog();

console.log(pekinezer);

pekinezer.bark();

console.log(pekinezer.hasSat);

pekinezer.doSit();

console.log(pekinezer.hasSat);

var pomeranac = new Dog();

console.log(pomeranac.hasSat);

pomeranac.bark();

function Human(name, age = 25) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log("Hi!");
  };
}

var marko = new Human("Marko", 14);
var pero = new Human("Pero", 26);
var iva = new Human("Iva", 31);

marko.sayHi();
pero.sayHi();
iva.sayHi();

console.log(marko.name);

console.log(iva);

var mihaela = new Human("Mihaela");

console.log(mihaela.age);

function Human2(name, age) {
  this.name = name;
  this.age = age;
}

Human2.prototype.sayHi = function () {
  console.log("Hi");
};

var aurora = new Human2("Aurora", 27);

aurora.sayHi();
console.log(aurora);

function Pas(name = "Rex") {
  this.name = name;
}

Pas.prototype.getName = function () {
  return "Ime ovoga psa je: " + this.name;
};

var pas = new Pas("Pesek");

console.log(pas.getName());
