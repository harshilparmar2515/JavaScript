// Arithmetic
console.log(10 + 5);
console.log(20 + 30);

console.log(10 - 5);
console.log(50 - 20);

console.log(10 * 2);
console.log(7 * 3);

console.log(10 / 2);
console.log(15 / 3);

console.log(10 % 3);
console.log(20 % 6);

console.log(2 ** 3);
console.log(3 ** 4);

// Assignment
let a = 5;
a += 2;
let b = 10;
b -= 3;
let c = 4;
c *= 5;
let d = 20;
d /= 4;
let e = 10;
e %= 3;
console.log(a, b, c, d, e);

// Comparison
console.log(5 == "5");
console.log(5 === 5);
console.log(10 != 5);
console.log(10 !== "10");
console.log(5 > 3);
console.log(2 >= 2);
console.log(1 < 5);
console.log(3 <= 3);

// Logical
console.log(true && false);
console.log(true && true);
console.log(false || true);
console.log(false || false);
console.log(!true);
console.log(!false);

// Bitwise
console.log(5 & 1);
console.log(6 & 3);
console.log(5 | 1);
console.log(6 | 3);
console.log(5 ^ 1);
console.log(6 ^ 3);
console.log(~5);
console.log(~0);
console.log(5 << 1);
console.log(3 << 2);
console.log(5 >> 1);
console.log(8 >> 2);

// Unary
let x = 5;
console.log(++x);
console.log(--x);
console.log(typeof x);
console.log(typeof "hello");

// Ternary
let age = 17;
console.log(age >= 18 ? "Adult" : "Minor");
console.log(20 >= 18 ? "Adult" : "Minor");

// String
console.log("Hello" + " World");
console.log("JS" + " Rocks");
console.log("Age: " + 18);
console.log("Score: " + 100);

// Special
console.log(typeof 100);
console.log(typeof "text");
console.log([1, 2, 3] instanceof Array);
console.log({} instanceof Object);
console.log("name" in { name: "Harshil" });
console.log("age" in { name: "Harshil" });
