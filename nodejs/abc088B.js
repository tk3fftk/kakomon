'use strict';

function Main(input) {
  const inp = input.split('\n');
  const N = inp[0];
  const a = inp[1].split(' ').map((o) => parseInt(o));
  const sortedA = a.sort((a, b) => b - a);

  let alice = 0;
  let bob = 0;
  let turn = true; // true -> alice, false -> bob

  sortedA.forEach((e) => {
    if (turn) {
      alice += e;
      turn = false;
    } else {
      bob += e;
      turn = true;
    }
  });

  console.log(alice - bob);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
