'use strict';

function mergeSort(ary, left, right) {
  console.log(left, right);
  if (right - left <= 1) return; // 配列のsizeが1以下ならreturn

  const mid = Math.floor((left + right) / 2);

  // 左側をソート
  mergeSort(ary, left, mid);
  // 右側をソート
  mergeSort(ary, mid, right);

  // 配列を一時保存 right側は左右反転
  const buf = [];
  for (let i = left; i < mid; i++) buf.push(ary[i]);
  for (let i = right - 1; i >= mid; i--) buf.push(ary[i]);

  let indexLeft = 0;
  let indexRight = buf.length - 1;
  for (let i = left; i < right; i++) {
    if (buf[indexLeft] <= buf[indexRight]) {
      ary[i] = buf[indexLeft++];
    } else {
      ary[i] = buf[indexRight--];
    }
  }

  console.log(ary);
}

function Main(input) {
  const inp = input.split('\n')[0];
  const A = inp.split(' ');

  mergeSort(A, 0, A.length);

  console.log(A);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
