const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./2587.txt")
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num.replace("\r", "")));
const sum = input.reduce((acc, cur) => acc + cur, 0);

input.sort();
console.log(sum / 5);
console.log(input[2]);
