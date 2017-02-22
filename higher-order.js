'use strict'

//beugro feladat

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

// foreach

var ramones = ['Joey', 'Johnny', 'Dee Dee', 'Tommy'];
var ramonesFull = ramones.forEach((e) => {
  console.log(e + " Ramone");
});

// filter

// const numbers = [11, 666, 12, 42, 88, 220, -99];
// const evens = numbers.filter((e) => {
//   return e % 2 === 0;
// });
// console.log(evens);

// map

// var numbers = [11, 666, 12, 42, 88, 220, -99];
// const tenTimes = numbers.map((e) =>{
//   return e * 10;
// });
// console.log(tenTimes);

// some

// const anyEven = [11, 3, 1, 55, 7].some((e) => {
//   return e % 2 === 0;
// });
// console.log(isAnyEven); // false

// // every

// const allEven = [4, 666, 20, 88, 22].every((e) => {
//   return e % 2 === 0;
// });
// console.log(isAllEven); // true



