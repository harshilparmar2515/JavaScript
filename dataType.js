//Number
let num1 = 10;
let num2 = 20.5;
let num3 = -100;
let num4 = 0;
let num5 = 1e5;
let num6 = 999;

console.log(num1, typeof num1);

//String
let str1 = "Harshil";
let str2 = 'JavaScript';
let str3 = "123";
let str4 = "Hello World!";
let str5 = `Template String`;
let str6 = "";

console.log(str1, typeof str1);

//Boolean
let bool1 = true;
let bool2 = false;
let bool3 = 10 > 5;
let bool4 = 5 === 10;
let bool5 = Boolean(1);
let bool6 = Boolean(0);

console.log(bool1, typeof bool1);

//BigInt
let big1 = 12345678901234567890n;
let big2 = 999999999999999999n;
let big3 = 10n;
let big4 = 0n;
let big5 = -50n;
let big6 = 2n ** 53n;

console.log(big1, typeof big1);

//Undefined
let und1;
let und2 = undefined;
let und3;
let und4;
let und5;
let und6;

console.log(und1, typeof und1);

//Null
let null1 = null;
let null2 = null;
let null3 = null;
let null4 = null;
let null5 = null;
let null6 = null;

console.log(null1, typeof null1); // object (JS bug)

//Symbol
let sym1 = Symbol(10);
let sym2 = Symbol(10);
let sym3 = Symbol("id");
let sym4 = Symbol();
let sym5 = Symbol("user");
let sym6 = Symbol("user");

console.log(sym1 === sym2); // false
console.log(typeof sym1);

//Object
let obj1 = { name: "Harshil", age: 18, city: "Bhavnagar" };
let obj2 = { isStudent: true };
let obj3 = [1, 2, 3];
let obj4 = function () {};
let obj5 = new Date();
let obj6 = {};

console.log(obj1, typeof obj1);
