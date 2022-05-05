function sum(a, b) {
  return a + b;
}

const params = [1, 2];
const sumES5 = sum.apply(null, params);
const sumES6 = sum(...params);
console.log(sumES5);
console.log(sumES6);

// ------ || ------

function restParameterFn(a, b, ...rest) {
  return (a + b) * rest.length;
}
console.log(restParameterFn(1, 6, "hello", true, 7));

function restParameterFnOld(a, b) {
  var arr = Array.prototype.slice.call(arguments, 2);
  return (a + b) * arr.length;
}

console.log(restParameterFnOld(1, 6, "hello", true, 7));
