function Main(input) {
  const s = input.split('\n')[0];
  let count = 0;
  if (s.charAt(0) === '1') count++;
  if (s.charAt(1) === '1') count++;
  if (s.charAt(2) === '1') count++;
  console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
