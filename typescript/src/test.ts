// function printLabel(labeledObj: { label: string }) {
//   console.log(labeledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

interface Test {
  name: string;
  age: number;
}

class Member {
  name: string;
  age: number;
  test: number;
  constructor(name: string, age: number, test: number) {
    this.name = name;
    this.age = age;
    this.test = test;
  }
}

//? 이건 뭘까요
let 준영: Test = new Member("준영", 29, 21);
// let 준영: Test = { name: "준영", age: 29,test:21 };
console.log(준영);

// interface User {
//   name: string;
//   id: number;
// }

// const user: User = {
//   username: "Hayes",
//   id: 0,
// };

//static
// class StaticTest {
//   name: string;
//   age: number;
//   static cnt: number = 0;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//     StaticTest.cnt++;
//   }
// }
// let test = new StaticTest("하이", 21);
// console.log("test", StaticTest.cnt);
// let test1 = new StaticTest("하이", 21);
// console.log("test1", StaticTest.cnt);
// let test2 = new StaticTest("하이", 21);
// console.log("test2", StaticTest.cnt);
// let test3 = new StaticTest("하이", 21);
// console.log("test3", StaticTest.cnt);

class Student {
  public name: string;
  private _math: number;
  private _english: number;
  private _science: number;
  static studentNum: number = 0;

  constructor(name: string, math: number, english: number, science: number) {
    this.name = name;
    this._math = math;
    this._english = english;
    this._science = science;
    Student.studentNum++;
  }

  get math(): number {
    return this._math;
  }
  set math(math) {
    if (math < 0) throw "점수가 0점보다 낮을 수 없습니다.";
    this._math = math;
  }
  get english(): number {
    return this._english;
  }
  set english(english) {
    if (english < 0) throw "점수가 0점보다 낮을 수 없습니다.";
    this._english = english;
    console.log("set english에 접근");
  }
  get science(): number {
    return this._science;
  }
  set science(science) {
    if (science < 0) throw "점수가 0점보다 낮을 수 없습니다.";
    this._science = science;
  }
}

let 장준영: Student = new Student("준영", 100, 100, 100);
console.log(장준영);
장준영.english = 99;
console.log(장준영);
장준영.english = -1;
console.log(장준영);
// 장준영.
