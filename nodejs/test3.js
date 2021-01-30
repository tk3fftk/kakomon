for (let i = 1; i <= 6; i++) {
  for (let j = i + 1; j <= 6; j++) {
    for (let k = j + 1; k <= 6; k++) {
      if (i + j + k === 9) {
        console.log(`${i} ${j} ${k}`);
      }
    }
  }
}
