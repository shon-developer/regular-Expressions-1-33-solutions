// todo Ignore Case While Matching

//? Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

let myString = "freeCodeCamp";
let fccRegex = /a|b|c/; // Change this line
let result = fccRegex.test(myString);
console.log(result);
