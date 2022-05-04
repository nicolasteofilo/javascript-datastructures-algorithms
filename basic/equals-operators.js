console.log("text" ? true : false); // true - if text is not null or undefined
console.log("text" == true); // false

console.log("text" === true); // false
console.log("text" === "text"); // true

const person1 = {
  name: "John",
};
const person2 = {
  name: "John",
};

console.log(person1 === person2); // false - because they are not the same object
