// "use strict";

// let js = "amazing";
// const firstName = "Vikash";
// const birthYear = 2004;
// const year = 2025;
// const job = "chess player";
// console.log(40 + 8 + 23 - 10);

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + "years old" + job + "!";
// console.log(jonas);
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// console.log(`String
//   multiple
//   lines`);

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license");
// } else {
//   console.log(
//     `Sarah can not drive not at this moment but in ${
//       18 - age
//     } years from now she can drive `
//   );
// }

// const birthYea = 1919;
// let century;
// if (birthYea <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const inputYear = "1991";
// console.log(Number(inputYear) + 10);
// console.log(typeof inputYear);

// const money = 0;
// if (money) {
//   console.log("you have money fkr");
// } else {
//   console.log("get some job dude");
// }

// let height = 50;
// if (height) {
//   console.log("your height is good");
// } else {
//   console.log("drink complan brother");
// }

// // const favourite = Number(prompt("Enter your fav number"));
// // console.log(favourite);
// // console.log(typeof favourite);

// // if (favourite === 23) {
// //   console.log("it is a good number");
// // }

// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("she can drive");
// } else {
//   console.log("i should drive insted of sara");
// }

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("today is monday");
//     break;
//   case "tuesday":
//     console.log("today is tuesday");
//     break;
//   case "wednesday":
//     console.log("today is wednesday");
//     break;
//   case "thursday":
//     console.log("today is thursday");
//     break;
//   case "frisay":
//     console.log("today is friday");
//     break;
//   case "saturday":
//     console.log("today is saturday");
//     break;
//   case "sunday":
//     console.log("today is sunday");
//     break;
//   default:
//     console.log("today is funday");
//     break;
// }

// function fruitProcessor(apples, oranges) {
//   // console.log(apples,oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const a = fruitProcessor(5, 0);
// console.log(a);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age2);

// const calcAge3 = (birthYear) => 2037 - birthYear;

// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// const ab = yearsUntilRetirement(1991, "vikash");
// const ac = yearsUntilRetirement(1991, "anyone");
// console.log(ab);
// console.log(ac);

// function cutfruits(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apple, orange) {
//   const appleno = cutfruits(apple);
//   const orangeno = cutfruits(orange);
//   const juice = `the total  of apple peices are ${appleno} and total no of orange peices are ${orangeno}`;
//   return juice;
// }
// console.log(fruitProcessor(3, 4));

const years = new Array(2004, 5008, 1994);
console.log(years.length);
const n = years.length;
console.log(years[n - 1]);
