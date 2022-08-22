interface One {
  one: number;
}
let one1: One = { one: 1 };
let one2: One = { one: 1, two: 2 }; //오류
//선택적 프로퍼티
interface Two {
  one: number;
  two?: string;
}
let two1: Two = { one: 1, two: '2' };
let two2: Two = { one: 1 };

//읽기전용 프로퍼티
interface Three {
  one: number;
  two?: string;
  readonly three: boolean;
}
let three: Three = { one: 1, two: 'two', three: true };
three.one = 2;
three.three = false; //오류

//문자열 인덱스 서명
interface Four {
  readonly three: boolean;
  four: string;
  [key: number]: string;
}
let four1: Four = { three: false, four: 'four', 1: 'one' };
let four2: Four = { three: false, four: 'four', 2: 'two' };

interface StudentHeight {
  name: string;
  [grade: number]: number;
}
let joy = { name: 'JoY', 1: 130, 2: 143, 3: 157 };

//리터럴 타입
type FiveType = 'Five' | 'five' | 'FiVe' | 'fivE' | 5;
interface Five {
  // five: string;
  [grade: number]: number;
  five: FiveType;
}
let five1 = { 1: 1, five: 'Five' };
let five2 = { 1: 1, five: 5 };

type Score = 'A' | 'B' | 'C' | 'D';
interface StudentScore {
  name: Score;
  [grade: string]: Score;
}
let joy = { name: 'JoY', 1: 'A', 2: 'D', 3: 'B' };

//함수 타입
interface Six {
  (x: number, y: number): number;
}
const plus: Six = function (num1, num2) {
  return num1 + num2;
};

//인덱서블
interface Seven1 {
  [index: number]: number;
}
let sevenArr1: Seven1 = [1, 2, 3, 4];
interface Seven2 {
  [key: number]: string;
}
let sevenArr2: Seven2 = ['1', '2', '3', '4'];
interface Seven3 {
  [key: string]: number;
}
let sevenArr3: Seven3 = [1, 2, 3, 4]; //오류

//extends
interface Eight {
  eight: string;
}
interface Eight2 extends Eight {
  eight2: number;
}
let eight1: Eight2 = { eight: 'eight', eight2: 8 };

//클래스 타입
interface Nine {
  eight: string;
  nine(val: string): number;
}
class NineClass implements Nine {
  constructor(public eight: string) {}
  //Nine인터페이스의 프로퍼티 nine 과 같은 이름이여야 한다.
  //파라미터의 이름은 같을 필요 없다.
  nine(val1: string) {
    return Number(val1);
  }
}

// //class 타입의 확장
// class Ten1 {
//   constructor(public ten: number) {}
// }
// let ten1: Ten1 = new Ten1(1);
// console.log(ten1);

// interface Ten2 extends Ten1 {
//   nine: string;
// }
// let ten2: Ten2 = { ten: 1, nine: "nine" };

interface Ten<T> {
  arr: T[];
}
let genericArr: Ten<number> = { arr: [1, 2, 3] };
