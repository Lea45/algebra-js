var human = {
  gender: "F",
  age: 25,
  name: {
    firstname: "Ana",
    lastname: "Horvat",
  },
  "eye's color": "blue",
  sayHello: function () {
    console.log("Hi!");
  },
};

console.log(human);
console.log(human.age);
console.log(human.name.firstname);
console.log(human["eye's color"]);
console.log(human["gender"]);
console.log(human.gender); // najbolje ovako traziti

var car = {
  marka: "Audi",
  model: "A4",
  year: 2021,
};
console.log(car);
car.model = "A6";
console.log(car);
car.color = "black";
console.log(car);
delete car.year;
console.log(car);

var cat = {
  name: "Mica Maca",
  age: 3,
  isGood: true,
  sayHi: function () {
    console.log("Mjaaaauuuu");
  },
};
console.log(cat);
console.log(JSON.stringify(cat));
