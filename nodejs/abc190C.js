'use strict';

function Main(input) {
  const inp = input.split('\n');
  const [N, Mnum] = inp[0].split(' ').map((o) => parseInt(o));
  const dishes = new Array(N + 1);
  const okeru = [];
  const M = [];
  const Knum = inp[Mnum + 1];
  const K = [];

  for (let i = 0; i < Mnum; i++) {
    M[i] = {};
    [M[i]['A'], M[i]['B']] = inp[1 + i].split(' ').map((o) => parseInt(o));
  }
  for (let i = 0; i < Knum; i++) {
    K[i] = {};
    const [C, D] = inp[Mnum + 2 + i].split(' ').map((o) => parseInt(o));
    K[i]['C'] = C;
    K[i]['D'] = D;

    okeru[C] = okeru[C] ? okeru[C] + 1 : 1;
    okeru[D] = okeru[D] ? okeru[D] + 1 : 1;
  }

  console.log(M, K, okeru);

  for (let i = 0; i < Knum; i++) {
    const c = K[i]['C'];
    const d = K[i]['D'];
    // dの方が少数派かつまだdに玉が入っていないならdに入れる
    if (okeru[c] >= okeru[d] && !dishes[d]) {
      console.log('d');
      dishes[d] = 1;
    } else if (okeru[d] > okeru[c] && !dishes[c]) {
      console.log('c');
      dishes[c] = 1;
    } else {
      console.log('c');
      dishes[c] = 1;
    }
  }

  console.log(dishes);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
