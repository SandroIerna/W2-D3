// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let integer1 = 7;
let integer2 = 1;
let sum = integer1 + integer2;
if (integer1 >= 8) {
  console.log("The first integer is equal or more than 8");
} else {
  if (integer2 >= 8) {
    console.log("The second integer is equal or more than 8");
  } else {
    if (sum >= 8) {
      console.log("The sum of the two integers is equal or more tha 8" + sum);
    } else {
      console.log("Not even the sum is equal or more than 8");
    }
  }
}

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let string1 = "This is string 1";
let string2 = "This is string 2";
let string3 = string1 + string2;
console.log(string3);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let n1 = 1;
let n2 = 2;
let n3 = 3;
if (n1 > n2 && n1 > n3 && n2 > n3) {
  console.log(n1, n2, n3);
} else {
  if (n1 > n2 && n1 > n3 && n3 > n2) {
    console.log(n1, n3, n2);
  } else {
    if (n2 > n1 && n2 > n3 && n1 > n3) {
      console.log(n2, n1, n3);
    } else {
      if (n2 > n1 && n2 > n3 && n3 > n1) {
        console.log(n2, n3, n1);
      } else {
        if (n3 > n1 && n3 > n2 && n1 > n2) {
          console.log(n3, n1, n2);
        } else {
          console.log(n3, n2, n1);
        }
      }
    }
  }
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let i1 = 5;
let i2 = 7;
let average = (i1 + i2) / 2;
console.log(average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

//not finished
/*
let value = "true";
let check = parseInt(value);
console.log(check);
if ((check = NaN)) {
  console.log("It is not an Integer");
} else {
  console.log("It is an integer");
}*/

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let number = 400;
let percentage = 20;
let solution = (number * percentage) / 100;
console.log(solution);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let x = 264;
if (x % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}
