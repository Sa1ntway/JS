// function puppy(breed, nickname) {
//   this.nickname = "Lutik";
//   this.breed = "labrador";
// }
// let dog = new puppy("labrador", "Lutik");
// puppy.prototype.hello = function () {
//   console.log(
//     "Привет меня все называют " + this.nickname + "и я породы " + this.breed
//   );
// };
// dog.hello();

// -----------------------------------------------------------------------------------------------------------------------------

// class itgenUser {
//   constructor(name, age) {
//     this.age = age;
//     this.name = name;
//   }
//   set_direction(direction) {
//     this.direction = direction;
//     console.log(direction);
//   }
//   introduce() {
//     console.log(
//       `name: ${this.name}, age: ${this.age}, direction: ${this.direction["DirName"]}, skill1: ${this.direction["skill1"]}, skill2: ${this.direction["skill2"]}, skill3: ${this.direction["skill3"]}`
//     );
//   }
// }

// class itgenDirection {
//   constructor(DirName, skill1, skill2, skill3) {
//     this.DirName = DirName;
//     this.skill1 = skill1;
//     this.skill2 = skill2;
//     this.skill3 = skill3;
//   }
// }

// let editing = new itgenDirection(
//   "editing",
//   "CutVideo",
//   "AddEffects",
//   "RightRender"
// );
// let photoshop = new itgenDirection(
//   "photoshop",
//   "RemoveBackground",
//   "AddCustomLight",
//   "AddText"
// );
// console.log(photoshop);
// let Boris = new itgenUser("Boris", 20);
// Boris.set_direction(editing);
// Boris.introduce();

// let Vlad = new itgenUser("Vlad", 14);
// Vlad.set_direction(photoshop);
// // console.log(Vlad);
// Vlad.introduce();

// ----------------------------------------------------------------------------------------------------------------------------------

class Student {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
  }
  introduce() {
    console.log(
      `name: ${this.name}, surname: ${this.surname}, year: ${this.year}`
    );
  }
  getFullName() {
    console.log(this.name + " " + this.surname);
  }
  getFullYear() {
    console.log(2023 - this.year);
  }
}

let student = new Student("Vladislav", "Drozdovich", 2020);
student.introduce();
student.getFullName();
student.getFullYear();
