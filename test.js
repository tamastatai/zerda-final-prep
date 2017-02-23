const test = require('tape');
const extractNumbers = require('./extractor.js');

test('true', function (t) {
  t.equal(1, 1);
  t.end();
});

test('5 - 2 = 3', function (t) {
  t.equal(extractNumbers(5, 2), 3);
  t.end();
});

test('6 - 6 = 12', function (t) {
  t.notEqual(extractNumbers(6, 6), 12);
  t.end();
});

test('6 - 12 = -6', function (t) {
  t.equal(extractNumbers(6, 12), -6);
  t.end();
});

