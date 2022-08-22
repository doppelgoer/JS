import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  let A: number = Number(line.split(' ')[0]);
  let B: number = Number(line.split(' ')[1]);
  console.log(A + B);

  rl.close();
}).on('close', function () {
  process.exit();
});
