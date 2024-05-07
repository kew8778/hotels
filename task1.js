'use strict';

function getStrOfNumComputers(num) {
  const strOfNum = num.toString();

  if (strOfNum.at(-2) !== '1') {
    if (strOfNum.at(-1) === '1') {
      return num + ' компьютер';
    } else if (strOfNum.at(-1) === '2' || '3' || '4') {
      return num + ' компьютера';
    }
  }

  return num + ' компьютеров';
}
