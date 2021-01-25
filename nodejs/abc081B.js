'use strict';
function reverse(str) {
  let result = '';
  for (let j = str.length - 1; j >= 0; j--) {
    result += str[j];
  }
  return result;
}

function Main(input) {
  const inp = input.split('\n');
  const N = inp[0];
  const A = inp[1].split(' ');
  let count = 0;
  let leastNum = 2 << 10;
  let leastPos = 2 << 10;

  for (let i = 0; i < N; i++) {
    const a = parseInt(A[i]);
    // 2進数表示にしたとき、1が一番右側にあるものの中で最小値を保持する
    const ab = reverse((a >>> 0).toString(2));
    const pos = ab.indexOf('1');
    if (pos < leastPos) {
      leastPos = pos;
      leastNum = a;
    }
  }

  for (; leastNum % 2 === 0; leastNum = leastNum / 2) {
    count++;
  }

  console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
