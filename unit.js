let units = 250;
let bill = 0;

if (units <= 100) {
  bill = units * 10;
} else if (units <= 200) {
  bill = 100 * 10 + (units - 100) * 20;
} else {
  bill = 100 * 10 + 100 * 20 + (units - 200) * 30;  
}

console.log("Total Units:", units);
console.log("Total Bill:", bill);  
