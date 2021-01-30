function calc(i) {
  if (i === 1) return 1;
  return i * calc(i - 1);
}

const result = calc(10);
console.log(result);
