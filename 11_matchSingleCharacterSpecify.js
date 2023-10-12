// todo Match Single Characters Not Specified

//? Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /[^09-aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
