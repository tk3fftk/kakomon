'use strict';

let count = 1;
const cache = new Map();

function sum(num) {
  let tmp = 0;
  if (cache.has(`k${num}`)) {
    return cache.get(`k${num}`);
  }
  for (let i = 0; i <= num; i++) {
    tmp += i;
  }
  cache.set(`k${num}`, tmp);
  return tmp;
}

// 指定した数まで順番に足し合わせ
function sum2(num, last) {
  let tmp = 0;
  if (cache.has(`k${num}l${last}`)) {
    return cache.get(`k${num}l${last}`);
  } else if (cache.has(`k${num}l${last + 1}`)) {
    const j = cache.get(`k${num}l${last + 1}`);
    cache.set(`k${num}l${last}`, j + last);
    return j + last;
  }
  for (let i = num; i >= last; i--) {
    tmp += i;
  }
  cache.set(`k${num}l${last}`, tmp);
  return tmp;
}

function check(num, last, N) {
  // console.log(num, last);
  const s = sum2(num, last);
  // -Nまで見たら、または合計が既に負なら修了
  if (last === 0 - N || (last < 0 && s < 0)) return;
  if (s === N) {
    // console.log(num, last);
    count++;
  }
  return check(num, last - 1, N);
}

function check2(num, last, N) {
  // console.log(num, last);
  // -Nまで見たら終了
  if (last === num) return;

  for (let i = num - 1; i >= last; i--) {
    const s = sum2(num, i);
    if (s === N) {
      // console.log(num, last);
      count++;
    }
  }
  return check2(num - 1, last, N - num);
}

function Main(input) {
  const N = parseInt(input.split('\n')[0]);
  for (let i = N; sum(i) >= N; i--) {
    check2(i, 0 - i, N);
  }
  console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
