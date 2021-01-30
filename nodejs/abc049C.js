'use strict';

const DREAM = 'dream';
const DREAMER = 'dreamer';
const ERASE = 'erase';
const ERASER = 'eraser';
const ary = [DREAM, DREAMER, ERASE, ERASER];
let result = false;

function reverse(str) {
  let tmp = '';
  for (let i = str.length - 1; i >= 0; i--) {
    tmp += str[i];
  }
  return tmp;
}

// 現在値, 目標値
function addstr(t, s) {
  // 一致していたらflagをtrueにしてreturn
  if (t === s) {
    result = true;
    return;
  }

  // tのほうが大きい、同文字数の別文字列であればreturn
  if (t.length >= s.length) {
    return;
  }

  // tがsの部分文字列になっていなければreturn
  if (!s.startsWith(t)) {
    return;
  }

  // それぞれを追加して再帰
  for (const a of ary) {
    let nextS = s;
    if (s.length > t.length) nextS = s.slice(t.length);
    if (nextS.startsWith(a)) {
      addstr(a, nextS);
    }
  }
}

function substr(s) {
  if (s.length === 0) {
    result = true;
    return;
  }

  if (s.length > 0 && s.length < 5) {
    return;
  }

  for (const a of ary) {
    if (s.startsWith(a)) {
      const newS = s.slice(a.length);
      if (newS.charAt(0) === 'r') {
        continue;
      }

      if (newS.startsWith('erd')) {
        continue;
      }

      substr(newS);
    }
  }
}

function Main(input) {
  const S = input.split('\n')[0];
  const reversedAry = ary.map((a) => reverse(a));
  let reversedS = reverse(S);
  // addstr(T, S);
  // substr(S);
  for (let i = 0; i < S.length; ) {
    let divided = false;
    for (const a of reversedAry) {
      if (reversedS.startsWith(a)) {
        reversedS = reversedS.slice(a.length);
        i += a.length;
        divided = true;
      }
    }
    if (!divided) {
      console.log('NO');
      return;
    }
  }

  console.log('YES');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
