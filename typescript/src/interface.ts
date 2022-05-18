interface Student {
  name: string;
  isMale: boolean;
  middleScore: number;
  finalScore: number;
}

function studentData(
  _name: string,
  _isMale: boolean,
  _middleScore: number,
  _finalScore: number
): Student {
  return {
    name: _name,
    isMale: _isMale,
    middleScore: _middleScore,
    finalScore: _finalScore,
  };
}
let 장1: Student = studentData("장1", true, 100, 100);
console.log("장1 : ", 장1);
let 장2 = studentData("장2", null!, 100, 100);
console.log("장2 : ", 장2);
//
// let 장3 = studentData('장3', true, 100, 100, 100);

interface Student1 {
  name: string;
  isMale: boolean;
  middleScore: number;
  finalScore: number;
}

function printStudentName(_student: Student1) {
  // console.log(_student.name);
  return _student.name;
}
1;

let myObj = {
  name: "장1",
  isMale: true,
  middleScore: 100,
  finalScore: 100,
  englishScore: 0,
};
printStudentName(myObj);

class JoY {
  name: string;
  isMale: boolean;
  middleScore: number;
  finalScore: number;
  constructor(
    name: string,
    isMale: boolean,
    middleScore: number,
    finalScore: number
  ) {
    this.name = name;
    this.isMale = isMale;
    this.middleScore = middleScore;
    this.finalScore = finalScore;
  }
}

interface One {
  one: number;
}
let one: One = { one: 1 };

//선택적 프로퍼티
interface Two {
  one: number;
  two?: string;
}
let two1: Two = { one: 1, two: "2" };
let two2: Two = { one: 1 };

//읽기전용 프로퍼티
interface Three {
  one: number;
  two?: string;
  readonly three: boolean;
}
let three: Three = { one: 1, two: "two", three: true };
three.one = 2;
three.three = false; //오류

interface Four {
  readonly three: boolean;
  four: string;
  [key: number]: string;
}
let four1: Four = { three: false, four: "four", 1: "one" };
let four2: Four = { three: false, four: "four", 2: "two" };

type FiveType = "Five" | "five" | "FiVe" | "fivE" | 5;
interface Five {
  // five: string;
  [grade: number]: number;
  five: FiveType;
}
let five1 = { 1: 1, five: "Five" };
let five2 = { 1: 1, five: 5 };
