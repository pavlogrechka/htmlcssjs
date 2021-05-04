'use strict';

function duplicateCount(text) {

  debugger;

  let result = 0;

  const arr = text.split('');

  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    const el = text[i];
    arr.includes(el) ? counter++ : counter;
    counter >= 2 ? result++ : result
    console.log(counter)
  }


  console.log(result)

}
console.log(duplicateCount("aabbbcd"));
