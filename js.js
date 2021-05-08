'use strict'

function reverseStr(str) {
  console.log(str)
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    const el = str[i];
    result += el;
    console.log(result)
  }
}

reverseStr('abcde')
