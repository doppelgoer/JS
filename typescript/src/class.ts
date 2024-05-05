// class Car {
//   constructor(public name: string) {}
//   public go() {
//     console.log("부릉부릉");
//   }
//   public stop() {
//     console.log("끼이익!!!");
//   }
// }
// class Bmw extends Car {
//   constructor(name: string, public 기종: string, private price: number) {
//     super(name);
//   }
//   public superGo() {
//     console.log("뿌아아아ㅏ아아앙ㅇ");
//   }
// }

// let car1 = new Bmw("준영이거", "기종이라", 300000);
// car1.go();
// console.log(car1);
// car1.superGo();

// class Test {
//   public four: string;
//   constructor(
//     public one: number,
//     protected two: string,
//     private three: string,
//     four: string
//   ) {
//     this.four = four;
//   }
// }

// let one: Test = new Test(1, "흠", "음?", "네번째");

// // let one.one = 2
// one.four = "eshdl";
// console.log(one);

// class GenericClass<T, U> {
//   constructor(public numberData: T, public StringData: U) {}
// }
// const GenericInstance = new GenericClass<number, string>(1, "one");
// console.log(GenericInstance);
// : any
