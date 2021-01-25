'use strict';

function Main(input) {
  const inp = input.split('\n')[0];
  const [N, A, B] = inp.split(' ').map((o) => parseInt(o));
  let count = 0;

  for (let i = 1; i <= N; i++) {
    const tenth = Math.floor(i / 10000) || 0;
    const th = Math.floor(i / 1000) % 10;
    const hund = Math.floor(i / 100) % 10;
    const ten = Math.floor(i / 10) % 10;
    const one = i % 10;
    const wa = ten + one + hund + th + tenth;

    if (wa >= A && wa <= B) {
      count += i;
    }
  }

  console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
