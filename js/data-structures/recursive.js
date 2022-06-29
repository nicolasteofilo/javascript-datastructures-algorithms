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
  // 1 * 5 => 5
  // 5 * 4 => 20
  // 20 * 3 => 60
  // 60 * 2 => 120
  // 120 * 1 => 120

  return total;
}

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.info(factorialIterative(4));
console.info(factorial(5));

function fibonacciIterative(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;

  for (let i = 2; i <= n; i++) {
    fibN = fibNMinus1 + fibNMinus2; // f(n - 1) + f(n - 2)
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }
  return fibN;
}

function fibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
