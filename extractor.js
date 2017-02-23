var lobab = 10

function extractNumbers(a,b) {
 if ((typeof(a) === 'number') && ( typeof(b) === 'number')) {
  return a - b
  }
  else {
    return "That's not a number!"
  }
}
console.log(typeof(lobab));

module.exports = extractNumbers;

