'use strict'

let arr = [
  [3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12]
]

function countRows (array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    counter += array[i];
  }
  return counter;
}

function countAll (arrList) {
  let newArrList = [];
  for (let i = 0; i < arrList.length; i++) {
    newArrList.push([ countRows(arrList[i]) ]);
  }
  return newArrList;
}

console.log(countAll(arr));
