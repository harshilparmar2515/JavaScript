for (let i = 1; i <= 5; i++) {

  if (i === 3) {
    continue;   // skip 3
  }

  console.log(i);
}
let i = 9;

while (i < 5) {
  i++;

  if (i === 2) {
    continue;
  }

  console.log(i);
}
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

