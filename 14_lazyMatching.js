// todo Find Characters with Lazy Matching

//* Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

//? Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

/*
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.h1*>/; // Change this line
let result = text.match(myRegex);
console.log(result);
*/

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result);
