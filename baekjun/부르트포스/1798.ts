const fs = require("fs");
const input: string[] = fs.readFileSync("../text.txt").toString().trim().split("\n");
let N: number = Number(input[0].split(" ")[0]);
let M: number = Number(input[0].split(" ")[1]);
let num: number[];
let number1: string[] = input[1].split(" ");

console.log(input);
for (let i: number = 0; i < number1.length; i++) {
  num.push(Number(number1[i]));
  console.log(num);
}