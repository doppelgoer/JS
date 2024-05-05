//.txt 파일 불러오기
const fs = require("fs");
const input = fs.readFileSync("text.txt").toString().trim().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(input);
// [5,5,2,3,4,1]

//처음에 입력받은 숫자는 몇개의 숫자를 입력받을 것인지 적는거기 때문에
//배열의 shift 함수를 사용해서 첫번째 요소를 지운다.
input.shift();

console.log(input);
// [5,2,3,4,1]

//sort함수를 사용해 배열을 정렬해준다.
input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
