'use strict';

function swap(a, left, right) {
  let tmp = a[left];
  a[left] = a[right];
  a[right] = tmp;
}

function quickSort(a, left, right) {
  if (right - left <= 1) return;

  // 基準となる数
  const mid = Math.floor((left + right) / 2);
  const pivot = a[mid];

  // 一番うしろとpivotをswap
  swap(a, mid, right - 1);
  let p = left;

  // 右端の1つ前まで見る
  for (let i = left; i < right - 1; i++) {
    if (a[i] < pivot) {
      swap(a, i, p);
      p++;
    }
  }
  swap(a, p, right - 1);

  console.log(a);
  quickSort(a, left, p);
  quickSort(a, p + 1, right);
}

function Main(input) {
  const inp = input.split('\n')[0];
  const A = inp.split(' ').map((o) => parseInt(o));

  quickSort(A, 0, A.length);

  console.log(A);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
