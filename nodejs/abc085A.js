const FIX = '2018';

function Main(input) {
  let S = input.split('\n')[0];
  console.log(FIX + S.slice(4));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
