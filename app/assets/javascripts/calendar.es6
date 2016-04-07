var evens = [0,2,4,6,8,10];
var odds = evens.map(v => v + 1);

$(document).ready(() => {
  console.log(odds);
  console.log("es6 success!");
});
