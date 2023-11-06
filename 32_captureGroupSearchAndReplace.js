// todo Use Capture Groups to Search and Replace

//? Write a regex fixRegex using three capture groups that will search for each word in the string one two three. Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.

let wrongText = "The sky is silver";
let silverRegex = /silver/;
let result = wrongText.replace(silverRegex, "blue");
console.log(result);
