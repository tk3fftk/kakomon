'use strict';
const RAMEN = 700;
const TOPPING = 100;

function Main(input) {
  const S = input.split('\n')[0];
  let topping = 0;
  if (S.charAt(0) === 'o') topping++;
  if (S.charAt(1) === 'o') topping++;
  if (S.charAt(2) === 'o') topping++;

  console.log(RAMEN + topping * TOPPING);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
