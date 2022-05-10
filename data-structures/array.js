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
