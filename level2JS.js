class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  speaks() {
    console.log("Dog says:" + this.speaks);
  }
  static realtedToClassItself() {
    console.log("This static function is directally releated to class itself");
  }
}

let dog = new Animal("dog", 4, "Bhow Bhow");
console.log(dog);
dog.speaks;

// try to learn more about classes in JavaScript
// date function

let curretDate = new Date();

console.log(curretDate.getTime());
