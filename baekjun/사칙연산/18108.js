//.txt 파일 불러오기
// const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const [num1, num2] = input;
  const [num21, num22, num23] = num2.split("");
  console.log(num1 * num23);
  console.log(num1 * num22);
  console.log(num1 * num21);
  console.log(num1 * num2);
  process.exit();
});
