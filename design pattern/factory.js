class Car {
  constructor(name) {
    this.name = name;
  }
  showInfo() {
    console.log(this.name);
  }
}
class Audi extends Car {
  constructor() {
    super("Audi");
  }
}
class BMW extends Car {
  constructor() {
    super("BMW");
  }
}
class Mercedes extends Car {
  constructor() {
    super("Mercedes");
  }
}
class CarFactory {
  create(type) {
    switch (type) {
      case "Audi":
        return new Audi();

      case "BMW":
        return new BMW();

      case "Mercedes":
        return new Mercedes();

      default: {
        console.log("Unknown Car type...");
      }
    }
  }
}
module.exports = new CarFactory();
