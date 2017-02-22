// Finding elements or index

// const numbers = [4, 52, 333, 22, 12, 291, 9, 3];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 10) {
//     console.log(numbers[i] + ', index: ' + i);
//   }
// }

// Generating collections

// const numbers = [1, 2, 33, 22, 10, 1];
// const moreThanTen = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 10) {
//     moreThanTen.push(numbers[i])
//   }
// }
// console.log(moreThanTen);

// Counting items in an object

const python = [
  { name: 'Graham Chapman', age: 48 },
  { name: 'Eric Idle', age: 73 },
  { name: 'Terry Gilliam', age: 76 },
  { name: 'Terry Jones', age: 75 },
  { name: 'John Cleese', age: 77 },
  { name: 'Michael Palin', age: 73 },
];

var age = 0;

for (let i = 0; i < python.length; i++) {
  if (python[i].age > 73) {
    age += 1;
  }
}
console.log(age);
