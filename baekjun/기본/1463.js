const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  let X = Number(line);
  const dp = new Array(X + 1).fill(0);
  console.log(dp);
  //   let cnt = 0;
  //   while (X) {
  //     if (X % 3 === 0) {
  //       X = X / 3;
  //       cnt++;
  //     } else if ((X - 1) % 3 === 0) {
  //       X = X - 1;
  //       cnt++;
  //     } else if (X % 2 === 0) {
  //       X = X / 2;
  //       cnt++;
  //     }
  //   }
  //   console.log(cnt - 1);
  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 1] + 1; // 1을 뺀 경우의 최솟값

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1); // 3으로 나눴을 경우의 최솟값
    }

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1); // 2로 나눴을 경우의 최솟값
    }
  }

  console.log(dp[X]);
  rl.close();
}).on('close', function () {
  process.exit();
});

// const fs = require('fs');
// let count = Number(fs.readFileSync('./dev/stdin').toString());
// const dp = new Array(count + 1).fill(0);

// for (let i = 2; i < dp.length; i++) {
//   dp[i] = dp[i-1] + 1; // 1을 뺀 경우의 최솟값

//   if (i % 3 === 0) {
//     dp[i] = Math.min(dp[i], dp[i/3] + 1) // 3으로 나눴을 경우의 최솟값
//   }

//   if (i % 2 === 0) {
//     dp[i] = Math.min(dp[i], dp[i/2] + 1) // 2로 나눴을 경우의 최솟값
//   }
// }

// console.log(dp[count]);
