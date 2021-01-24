function Main(input) {
  const [s, t] = input.split('\n');
  let tmp = [];
  for (let c of s) {
    tmp.push(c);
  }
  const sd = tmp.sort().join('');
  tmp = [];
  for (let c of t) {
    tmp.push(c);
  }
  const td = tmp.sort().reverse().join('');

  console.log(sd.localeCompare(td) < 0 ? 'Yes' : 'No');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
