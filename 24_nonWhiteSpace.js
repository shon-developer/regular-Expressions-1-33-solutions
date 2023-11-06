// todo Match Non-Whitespace Characters

//? Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

let whitespace = "Shon55@";
let nonWhiteSpace = /\S/g;
let result = whitespace.match(nonWhiteSpace).length;
console.log(result);
