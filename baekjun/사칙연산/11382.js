//.txt 파일 불러오기
// const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  const [num1, num2, num3] = line.split(" ").map((num) => Number(num));
  console.log(num1 + num2 + num3);
});

rl.on("close", () => {
  process.exit();
});
