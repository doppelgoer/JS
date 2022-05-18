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
console.log("square1의 둘레 : ", square1);
