'use strict';

const { parse } = require('path');

const A_WIN = 'Takahashi';
const B_WIN = 'Aoki';

function Main(input) {
  const inp = input.split('\n');
  const [A, B, C] = inp[0].split(' ').map((o) => parseInt(o));

  if (A > B) {
    console.log(A_WIN);
  } else if (A === B) {
    if (C === 0) {
      console.log(B_WIN);
    } else {
      console.log(A_WIN);
    }
  } else {
    console.log(B_WIN);
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
