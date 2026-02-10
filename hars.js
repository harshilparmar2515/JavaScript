
function add(a, b) {
  return a + b;
}


const multiply = function(a, b) {
  return a * b;
};


const square = (num) => num * num;

(function() {
  console.log("IIFE: App initialized");
})();


console.log("Add:", add(5, 3));
console.log("Multiply:", multiply(4, 2));
console.log("Square:", square(6));



