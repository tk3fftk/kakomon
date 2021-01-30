'use strict';

function Main(input) {
  const inp = input.split('\n');
  const [N, S, D] = inp[0].split(' ').map((o) => parseInt(o));
  const X = [];
  const Y = [];
  for (let i = 0; i < N; i++) {
    [X[i], Y[i]] = inp[1 + i].split(' ').map((o) => parseInt(o));
  }

  for (let i = 0; i < N; i++) {
    if (X[i] < S && Y[i] > D) {
      console.log('Yes');
      return;
    }
  }

  console.log('No');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
