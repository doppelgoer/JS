import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  let X: number = Number(line);
  let cnt: number = 0;

  while (X) {
    if (X % 3 === 0) {
      X = X / 3;
      cnt++;
    } else if ((X - 1) % 3 === 0) {
      X = X - 1;
      cnt++;
    } else if (X % 2 === 0) {
      X = X / 2;
      cnt++;
    }
  }
  console.log(cnt - 1);

  rl.close();
}).on('close', function () {
  process.exit();
});
