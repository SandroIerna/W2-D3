/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

// 1 NUMBER: It's a variable that has a number as its value.
// 2 STRING: It's a variable that has text as its value.
// 3 NULL: It's a variable that has a defined value and that defined value corresponds to "NULL".
// 4 UNDEFINED: It's a variable that has no defined value.
// 6 BOOLEAN: It's a variable that can only have two values: "true" or "false"

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

//  A variable is a container that can contain any type of information, which is described by one of the data types.
// The value that we asign to each variable can be variable as the name suggests, that means we can change it later on.

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let a = 12;
let b = 20;
let sum = a + b;
console.log("\n" + sum);

/* EXERCISE 4
 Create a variable named y and assign to it the number 12.
*/

let y = 12;
console.log("\nThe variable Y is=", y);

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";
console.log("\nThe variable name is=", name);

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let subtraction = 12 - y;
console.log(subtraction);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
let check = name1 === name2;
console.log("\n" + check);
if (name2.toLowerCase() === name1) {
  console.log("The names are the same if you decapitalise the second name.");
}

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let x = 3;
if (x === 1) {
  x = "one";
}
if (x === 2) {
  x = "two";
}
if (x === 3) {
  x = "three";
}
if (x === 4) {
  x = "four";
}
if (x === 5) {
  x = "five";
}
if (x === 6) {
  x = "six";
}
if (x === 7) {
  x = "seven";
}
if (x === 8) {
  x = "eight";
}
if (x === 9) {
  x = "nine";
}
if (x === 10) {
  x = "ten";
}
console.log(x);

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */
