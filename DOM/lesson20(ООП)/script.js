// class User {
//   #salary;
//   static #retirementAge = 65;
//   constructor(name, time, salary, age) {
//     this.name = name;
//     this.time = time;
//     this.#salary = this.#CheckSalary(salary, time);
//     this.age = age;
//     // this.#salary = ;
//   }
//   setSalary(salary) {
//     this.#salary = salary;
//   }
//   #CheckSalary(salary, time) {
//     if (time == 0) {
//       salary = 0;
//     }
//     return salary;
//   }
//   static calculateRestAges(user) {
//     if (this.#retirementAge > user.age) {
//       const restAges = this.#retirementAge - user.age;
//       if (restAges < 2) {
//         console.log(`До пенсии осталось ${restAges} год`);
//       } else if (restAges < 5 && restAges > 1) {
//         console.log(`До пенсии осталось ${restAges} года`);
//       } else if (restAges >= 5) {
//         console.log(`До пенсии осталось ${restAges} лет`);
//       }
//     } else {
//       console.log("Вы уже на пенсии");
//     }
//   }
//   print() {
//     console.log(
//       `Name: ${this.name}, time: ${this.time}, salary: ${this.#salary}`
//     );
//   }
// }
// let user1 = new User("User1", 7, 5000, 28);
// user1.setSalary(7000);
// user1.print();
// let user2 = new User("User2", 0, 2000, 40);
// user2.print();
// let user3 = new User("User3", 9, 6000, 60);
// User.calculateRestAges(user3);

// ===============================================================================================

// class Car {
//   constructor(carBrand, gasType, year) {
//     this.carBrand = carBrand;
//     this.gasType = gasType;
//     this.year = year;
//   }
//   print() {
//     console.log(
//       `Brand: ${this.carBrand}, year: ${this.year}, Fuel: ${this.gasType}`
//     );
//   }
// }

// class Truck extends Car {
//   constructor(carBrand, gasType, year, TransprotrationType, WheelFormula) {
//     super(carBrand, gasType, year);
//     this.TransprotrationType = TransprotrationType;
//     this.WheelFormula = WheelFormula;
//   }
//   work() {
//     console.log(
//       `Brand: ${this.carBrand}, year: ${this.year}, Fuel: ${this.gasType}, Machine body type: ${this.TransprotrationType}, WheelFormula: ${this.WheelFormula}`
//     );
//   }
// }
// let newCar = new Truck(
//   "FORD TRUCKS F-MAX EURO5",
//   "Дизель",
//   "1927",
//   "с прицепом",
//   "4x2"
// );

// newCar.work();

// ===============================================================================================

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// let per1 = new Person("Vlad", "Drozdovich", 14, "blue");
// let per2 = new Person("Andrew", "Radzko", 15, "green");
// let per3 = new Person("Lesha", "Gorlov", 15, "brown");
// let per4 = new Person("Nikolay", "Odintsov", 15, "green");
// let per5 = new Person("Mattew", "Voyna", 14, "blue");

// --------------------

// class Car {
//   constructor(carName, carModel, carWeight, carColor) {
//     this.carName = carName;
//     this.carWeight = carWeight;
//     this.carModel = carModel;
//     this.carColor = carColor;
//   }
// }

// let newCar = new Car("Fiat", "500", "850kg", "white");
// let newCar2 = new Car("Ford", "SUV", "1100kg", "pale-blue");
// let newCar3 = new Car("Geely", "sport", "960kg", "dark-blue");

// ----------------------------------------

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  win() {
    console.log(`${this.name} WINNER!`);
  }
  def() {
    console.log(`${this.name} DEAFEATED!`);
  }
}

let Hero1 = new Hero("Ursa", 23);
Hero1.win();
let Hero2 = new Hero("Crystal Maiden", 18);
Hero2.def();

// ----------------------------------------
