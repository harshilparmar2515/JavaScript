
// type conversion practice

console.log('5' + 3);   // 53
console.log('5' - 3);   // 2

console.log(Number('10'));
console.log(parseInt('10px'));
console.log(+'20');

console.log(100 + '');
console.log(String(100));

console.log('10' * '2');
console.log('10' / 2);
console.log('abc' - 1); // NaN

console.log(Boolean(1));
console.log(Boolean(0));
console.log(!!'hello');
console.log(!!'');

console.log(true + 1);
console.log(false + 10);

console.log(true == 1);
console.log(false == 0);

console.log(Boolean(null));
console.log(Boolean(undefined));

console.log(null + 1);
console.log(null == 0);
console.log(null == undefined);
console.log(Number(null));
console.log(String(null));

console.log(undefined + 1);
console.log(Number(undefined));
console.log(String(undefined));

console.log('5' + true);
console.log('5' - true);
console.log(true + false);

console.log([] + []);
console.log([] + {});
console.log(Number([]));
console.log(Number([5]));
console.log(Number([1, 2]));
console.log(Boolean([]));

console.log('0' == 0);
console.log('0' === 0);
console.log(false == '');
console.log(false == []);
console.log([] == '');
console.log(null == false);
console.log(undefined == false);

let value = 'hello';
console.log(Number('123'));
console.log(Boolean(value));
console.log(String(value));
