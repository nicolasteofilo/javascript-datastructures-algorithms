function recursiveFunction(someParam) {
  recursiveFunction(someParam);
}

// recursiveFunction()
// note: execute in browser this code
function understandRecursion(doIunderstandRecursion) {
  const recursionAnswer = confirm("Do you understand recursion?");
  recursionAnswer ? true : understandRecursion(doIunderstandRecursion);
}

// understandRecursion()

function factorialIterative(number) {
  if (number < 0) {
    return undefined;
  }
  let total = 1;
  for (let n = number; n > 1; n--) {
    total = total * n;
  }
  return total
}

console.log(factorialIterative(5));
