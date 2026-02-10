// 1. Function Declaration
function declarationFunction(Harshil) {
  return "Declaration: Hello " + Harshil;
}

// 2. Function Expression
const expressionFunction = function() {
  return "Expression: Hello World..!! " ;
};

// 3. Arrow Function
const arrowFunction = () => {
  return "Arrow: Function";
};

// 4. IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("IIFE: It Will Runs immediately");
})();


// Using all functions
console.log(declarationFunction("Amit"));
console.log(expressionFunction("Amit"));
console.log(arrowFunction("Amit"));

