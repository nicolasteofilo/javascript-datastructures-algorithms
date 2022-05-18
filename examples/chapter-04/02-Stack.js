import { Stack } from "../../data-structures/js/stack.js";
const stack = new Stack();

stack.push(5);
console.log(stack.items);

console.log(stack.size());
console.log(stack.isEmpty());

stack.pop();
console.log(stack.items);
console.log(stack.peek());

stack.push(8);
console.log(stack.toString());

console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
