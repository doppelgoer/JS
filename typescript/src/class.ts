enum Sex {
  Female = "Female",
  Male = "Male",
}

class Students {
  public name: string;
  public age: number;
  public sex: Sex;
  private _love: string;
  // private love: string = "test";
  // constructor(name: string, age: number, sex: Sex) {
  constructor(name: string, age: number, sex: Sex, love: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this._love = love;
  }
  public get love() {
    return this._love;
  }
  public set love(val: string) {
    this._love = val;
  }
}

const studentArr = [];
// let student: Students = new Students("장준영", 13, Sex.Female, "정가영");
// student.love
// console.log(student.love);

class Test {
  constructor(public name: string, public age: number) {}
}
let 장준영 = new Test("장준영", 29);
console.log(장준영);

// for (let i = 0; i < 10; i++) {
//   let student: Students = new Students("장준영", 13, Sex.Female, "정가영");
//   // let student: Students = new Students("장준영", 13, Sex.Female);
//   studentArr.push(student);
//   console.log(studentArr);
//   // console.log(student.love);
// }
