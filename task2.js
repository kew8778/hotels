'use strict';

function getGenDivs(nums) {
  const genDivs = [];
  const minNum = Math.min(...nums);

  for (let i = 2; i <= minNum / 2; i++) {
    if (minNum % i === 0) {
      let isGenDiv = true;

      for (let num of nums) {
        if (num % i !== 0) {
          isGenDiv = false;
          break;
        }
      }

      if (isGenDiv) {
        genDivs.push(i);
      }
    }
  }

  return genDivs;
}
