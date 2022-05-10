const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const isEven = (x) => x % 2 === 0;

numbers.every(isEven); // will iterate until the function returns false
numbers.some(isEven); // will iterate until the function returns true

numbers.forEach((i) => (isEven(i) ? console.log(i) : null));

const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
