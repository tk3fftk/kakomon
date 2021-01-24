function Main(input) {
  const i = input.split('\n');
  const [a, b] = i[0].split(' ');

  (parseInt(a) * parseInt(b)) % 2 === 0
    ? console.log('Even')
    : console.log('Odd');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
