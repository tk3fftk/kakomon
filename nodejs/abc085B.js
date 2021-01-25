'use strict';

function Main(input) {
  const inp = input.split('\n');
  const N = inp.shift();
  const m = new Set();

  for (let i = 0; i < N; i++) {
    m.add(inp[i]);
  }

  console.log(m.size);
}

function Main2(input) {
  const inp = input.split('\n');
  const N = inp.shift();
  const d = inp.map((i) => parseInt(i)).sort((a, b) => b - a);
  let count = 0;
  let current = 101;

  d.forEach((e) => {
    if (e < current) {
      count++;
      current = e;
    }
  });

  console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
