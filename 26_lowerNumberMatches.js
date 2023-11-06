// todo Specify Onlt the Lower Number of Matches

//? Change the regex haRegex to match the word Hazzah only when it has four or more letter z's

let haStr = "hazzaaah";
let haRegex = /haz{4,}ah/i; // Change this line
let result = haRegex.test(haStr);
console.log(result);
