'use strict';

const FIVE_HUNDRED = 500;
const ONE_HUNDRED = 100;
const FIFTY = 50;
const cache = new Map();
const result = new Map();

// 枚数x3, 残額, 試行回数
function choose(a, b, c, x, attempt) {
  let pay = false;

  // 払い終わっている
  if (x === 0) {
    result.set(`p${a}${b}${c}`, 1);
    return;
  }

  // 試行回数が尽きた (出せなかった)
  if (attempt <= 0) {
    return;
  }

  // 全額使い果たした
  if (a <= 0 && b <= 0 && c <= 0) {
    return;
  }

  if (cache.has(`p${a}${b}${c}${x}`) || result.has(`p${a}${b}${c}`)) {
    return;
  }

  if (x >= FIVE_HUNDRED && a > 0) {
    // 500を出せる場合
    // 出す
    choose(a - 1, b, c, x - FIVE_HUNDRED, attempt - 1);
    // 出さない
    choose(a, b, c, x, attempt - 1);
    pay = true;
  }

  // 100を出せる場合
  if (x >= ONE_HUNDRED && b > 0) {
    // 出す
    choose(a, b - 1, c, x - ONE_HUNDRED, attempt - 1);
    // 出さない
    choose(a, b, c, x, attempt - 1);
    pay = true;
  }

  // 50を出せる場合
  if (x >= FIFTY && c > 0) {
    // 出す
    choose(a, b, c - 1, x - FIFTY, attempt - 1);
    // 出さない
    choose(a, b, c, x, attempt - 1);
    pay = true;
  }

  // 出せない
  if (!pay) {
    cache.set(`p${a}${b}${c}${x}`, 1);
  }
}

function Main(input) {
  const inp = input.split('\n');
  const A = parseInt(inp[0]); // 500 yen
  const B = parseInt(inp[1]); // 100 yen
  const C = parseInt(inp[2]); // 50 yen
  const X = parseInt(inp[3]); // X yen

  // choose(A, B, C, X, A + B + C);

  let c = 0;

  // 素直に全探索すればOKだった
  for (let i = 0; i <= A; i++) {
    for (let j = 0; j <= B; j++) {
      for (let k = 0; k <= C; k++) {
        if (FIVE_HUNDRED * i + ONE_HUNDRED * j + FIFTY * k === X) {
          c++;
        }
      }
    }
  }

  //console.log(result.size);
  console.log(c);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
