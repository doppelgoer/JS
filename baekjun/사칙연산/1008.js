//.txt 파일 불러오기
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  const [num1, num2] = line.split(" ");
  console.log(num1 / num2);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
