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
