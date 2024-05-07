'use strict';

function printMultiTable(max) {
  const strs = [];

  // Формируем строки
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j <= max; j++) {
      if (!i) {
        let num = (!j) ? ' ' : j.toString();
        strs[j] = align(num, max.toString().length); 
      } else {
        let num = (!j) ? (' ' + i * (j + 1)) : (' ' + i * j);
        strs[j] += align(num, (i * max).toString().length);
      }
    }
  }

  console.log(strs.join('\n'));
}

// Выравнивание строк
function align(str, length) {
  for (let i = str.length; i <= length; i++) {
    str = ' ' + str;
  }

  return str;
}
