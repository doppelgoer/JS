//기명 함수
//호이스팅 가능
function foo1(num1: number, num2: number): number {
  return num1 + num2;
}

//익명 함수
//호이스팅 불가능
const foo2 = function (num1: number, num2: number) {
  return num1 + num2;
};

//익명함수에는 interface를 적용 가능
interface Round {
  (width: number, height: number): number;
}
const square: Round = function (x, y) {
  return x + y;
};
let square1 = square(1, 2);

//선택적 매개변수(property) 와 선택적 매개변수
function one(x: number, y?: number): number {
  if (y) return x + y;
  else return x;
}
let one1: number = one(1, 2); //3
let one2: number = one(1); //1

//초기화 매개변수
function two(x: number, y: number = 1) {
  return x + y;
}
let two1: number = two(1, 2); //3
let two2: number = two(1, undefined); //2

function three(x: number, y: number, ...z: number[]): number {
  let sumOfZ: number = 0;
  for (let i = 0; i < z.length; i++) {
    sumOfZ = sumOfZ + z[i];
  }
  return x + y + sumOfZ;
}
let three1: number = three(1, 1); //2;
// console.log(three1);
let three2: number = three(1, 1, 1); //2;
// console.log(three2);
let three3: number = three(1, 1, 1, 1); //2;
// console.log(three3);

// function four(this: void) {
//   console.log(this);
// }

// let four1 = four(this);
// }

//param의 타입이 number 일 때는 콘솔에 찍고, 나머지
//경우는 param 을 return 한다
function genericFn<T>(param: T): T | void {
  if (typeof param === "number") {
    console.log(param);
  } else {
    return param;
  }
}
genericFn(1); //console.log(1)
genericFn("text"); //return 'text'
genericFn(true); //return true

function anyFn(param: any): any {
  return param;
}
function anyFn1(param: any): any {
  return param;
}
