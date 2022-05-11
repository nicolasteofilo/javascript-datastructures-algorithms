let dayOfWeek = new Array();
dayOfWeek = new Array(7);
dayOfWeek = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);

for (let i = 0; i < dayOfWeek.length; i++) {
  console.log(dayOfWeek[i]);
}

const fibonacci = [, 1, 1];

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
numbers.push(11);

Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }

  this[0] = value;
};

numbers.insertFirstPosition(-1); // add -1 to the first position
console.log(numbers);

numbers.unshift(-2); // add -2 to the first position
numbers.unshift(-4, -3);
console.log(numbers);

numbers.pop(); // removes the last element
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1]; // moves the elements to the left
}
console.log(numbers);

Array.prototype.reIndex = function (array) {
  const newArray = new Array();
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined) {
      newArray.push(array[i]);
    }
  }
};

Array.prototype.removeFistPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};

const citys = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Philadelphia",
  "Phoenix",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
];

console.log(citys.shift()); // removes the first element
console.log(citys);
citys.splice(0, 1); // removes the first element
console.log(citys);

function addElement(array, position, ...elements) {
  array.splice(position, 0, ...elements);
}

addElement(citys, 2, "Detroit");
console.log(citys);

// --- Bidimensional ARRAY ---
// array in array, it's called a bidimensional array
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}

printMatrix(averageTemp);
console.table(averageTemp);

// --- Multidimensional ARRAYS ---
const matrix3x3x3 = [];

for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = []; // creates a new array inside the matrix
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let k = 0; k < 3; k++) {
      matrix3x3x3[i][j][k] = i + j + k;
    }
  }
}

for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3[i].length; j++) {
    for (let k = 0; k < matrix3x3x3[i][j].length; k++) {
      console.log(matrix3x3x3[i][j][k]);
    }
  }
}

console.table(matrix3x3x3);

// Concatenation of arrays
const zero = 0;
const positiveNumbers = [1, 2, 3, 4, 5];
const negativeNumbers = [-1, -2, -3, -4, -5];
let concatArrays = negativeNumbers.concat(positiveNumbers, zero);
console.log(concatArrays);

// --- ITERATORS ---

const numbersIterate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const isEven = (x) => x % 2 === 0;

numbersIterate.every(isEven); // will iterate until the function returns false
numbersIterate.some(isEven); // will iterate until the function returns true

numbersIterate.forEach((i) => (isEven(i) ? console.log(i) : null));

const myMap = numbersIterate.map((i) => i % 2 === 0); // return a new array with the result of the function (boolean)
console.log(myMap);

const evenNumbers = numbersIterate.filter((i) => i % 2 === 0); // return a new array with the result of the function (the values)
console.log(evenNumbers);

const reduceNumbers = numbersIterate.reduce(
  (previous, curr) => previous + curr
);
console.log(reduceNumbers);

const find = numbersIterate.find((i) => i % 2 === 0);
const findIndex = numbersIterate.findIndex((i) => i === 14);
console.log({
  find,
  findIndex,
});

for (const n of numbersIterate) {
  console.log(n % 2 === 0 ? "even" : "odd");
}

for (const n of numbersIterate) {
  console.log(n % 2 === 0 ? "even" : "odd");
}

// --- @@ITERATOR ---

let iterator = numbersIterate[Symbol.iterator]();
console.log(iterator.next().value);
for (const n of iterator) {
  console.log(n);
}

const names = ["John", "Jane", "Mary", "Mark", "Bob"];

let entries = names.entries();
// console.log(entries.next().value);
for (let i = 0; i < names.length; i++) {
  const n = entries.next().value;
  console.log(n[1]);
}

const aKeys = names.keys();

console.log(aKeys.next());
for (let i = 0; i < names.length; i++) {
  const n = aKeys.next().value;
  console.log(n);
}

const aValues = names.values();
console.log(aValues.next());
console.log(aValues.next());
for (let i = 0; i < names.length; i++) {
  const value = aValues.next().value;
  console.log(value);
}
