function Main(input) {
  const s = input.split('\n')[0];
  const first = s[0];
  const end = s[s.length - 1];
  const mid = s.slice(1, s.length - 1).length;

  console.log(`${first}${mid}${end}`);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
