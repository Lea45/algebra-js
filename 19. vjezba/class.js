class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

const nekiPas = new Dog("Rex", 14);

console.log(nekiPas);

console.log(nekiPas.getName());

class ElectronicDevice {
  constructor(inp, out) {
    this.input = inp;
    this.output = out;
  }
}

class Mobile extends ElectronicDevice {
  constructor(brand, i, o) {
    super(i, o);
    this.brand = brand;
  }
  getBrand() {
    return this.brand;
  }
  getInput() {
    return `${this.input}V`;
  }
  getOutput() {
    return `${this.output}V`;
  }
}

const iphone = new Mobile("apple", 20, 220);

console.log(iphone.getBrand());
console.log(iphone.getInput());
console.log(iphone.getOutput());

class Counter {
  constructor() {
    this.state = 0;
  }
  walk(num) {
    this.state += num;
  }
  getState() {
    return this.state;
  }
}

const man = new Counter();

man.walk(155);

console.log(man.getState());

function Counter2() {
  this.state = 0;
}

Counter2.prototype.walk = function (num) {
  this.state += num;
};
Counter2.prototype.getState = function () {
  return this.state;
};

const abc = new Counter2();

console.log(abc);

abc.walk(1234);

console.log(abc);

console.log(abc.getState());
