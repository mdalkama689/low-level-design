// object is basically key value pairs.
// where key is only be string or symbol and value can be any data type

const obj1 = {
  name: "alkama",
  age: 13,
};

const obj2 = {
  1: "vishwa",
  true: "mohan",
};

// if we console.log(obj2)
//  then it will printed as { '1': 'vishwa', true: 'mohan' }
// there 1 is treated internally string but also true is treated internally string
// which is not shown here

// multiple ways to write objects:-

//1.using litrals, they are two ways to define function inside an object

// a.
const car = {
  name: "tesla",
  model: "s1",
  start() {
    console.log("car started");
  },
};

// b.
const bike = {
  name: "bajaj",
  model: "pulsar 150",
  start: function () {
    console.log("bike started");
  },
};

// car.start()
// bike.start()

// 2. using new Object() constructor

const book = new Object();
book.title = "Think and grow rich!";
book.author = "Nepolian Hill";
book.summary = function () {
  console.log(
    `The book title  and auther is : ${this.title} and ${this.author} `
  );
};

// ${this.title} ---> this is called as invoking object.
// ${this.author} ---> this is called as invoking object

// 3. using construction function before ES6(before 2015)

function Person(name, age) {
  (this.name = name), (this.age = age);
  this.greet = function () {
    console.log(`Hello, I am ${this.name}`);
  };
}

const p1 = new Person("alkama", 18);

// console.log(p1)

// 4.creating object using classes

class Animal {
  constructor(name, type) {
    (this.name = name), (this.type = type);
  }

  sound() {
    console.log(`${this.name} makes sound`);
  }
}

const dog = new Animal("Dog", "Mammal");
// dog.sound()

// 5. using Object.create()

const animal = {
  speak() {
    console.log(`${this.name} makes a sound!`);
  },
};

const cat = Object.create(animal);
cat.name = "winter";

// console.log(cat)
// cat.speak()

// <---------------------------------------------------------------------->

//Operations in Objects

const user = {
  name: "alkama",
  "user role": "admin", // you can also write key in "user role" way is there is any space needed
};

// a. accessing th value

// console.log(user)
// console.log(user.name)
// console.log(user['user role']) // this is the way of access this type of key

// b. adding the value

user.age = 12; // add age inside the user
// console.log(user)

// c. delete the key with value

// delete user.name
// console.log(user)
// delete user['user role']
// console.log(user)

// 2.iterate in objects

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
