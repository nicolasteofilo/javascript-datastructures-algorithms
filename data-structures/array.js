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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.push(11);
console.log(numbers);

Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }

  this[0] = value;
};
numbers.insertFirstPosition(-1);
console.log(numbers);

numbers.unshift(-2);
console.log(numbers);
