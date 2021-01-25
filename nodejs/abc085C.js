'use strict';
const doubt = '-1 -1 -1';
const yukichi = 10000;
const higuchi = 5000;
const noguchi = 1000;

function Main(input) {
  const [N, Y] = input.split(' ').map((o) => parseInt(o));

  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= N - i; j++) {
      for (let k = 0; k <= N - (i + j); k++) {
        if (i + j + k === N && yukichi * i + higuchi * j + noguchi * k === Y) {
          console.log(`${i} ${j} ${k}`);
          return;
        }
      }
    }
  }

  console.log(doubt);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
