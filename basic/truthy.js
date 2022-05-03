function testTruthy(val) {
  return val ? console.log("truthy") : console.log("falsy");
}

testTruthy(-0);
