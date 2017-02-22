'use strict'

let arr = [
  [3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12]
]


let arr2 = arr.map(function (e) {
  return [ e.reduce(function (a, b) {
    return a + b;
  }, 0) ];
})
console.log(arr2);