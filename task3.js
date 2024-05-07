'use strict';

function getPrimeNums(min, max) {
  const primeNums = [];

  for (let i = min; i <= max;) {
    let isPrimeNum = true;

    for (let j = 2; j <= i / j; j++) {
      if (i % j === 0) {
        isPrimeNum = false;
        break;
      }
    }

    if (isPrimeNum) {
      primeNums.push(i);
      i += 2;
    } else {
      i++;
    }
  }

  return primeNums;
}
