var num = 1;

if (num === 1) {
  console.log("num is 1");
} else {
  console.log("num is not 1");
}

if (num === 1) {
  num--;
  console.log("Num", num);
} else {
  num++;
}

num === 1 ? num-- : num++;

var month = 1;

if (month === 1) {
  console.log("January");
} else if (month === 2) {
  console.log("February");
} else {
  console.log("Month is not January or February");
}

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  default:
    console.log("Month is not January or February");
    break;
}
