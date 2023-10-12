// todo Match Beginning String Patterns

//? Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal

let firstString = "Ricky is first and can be found";
let firstRegex = /^Ricky/;
let result = firstRegex.text(firstString);
console.log(result);

let notFirst = "You can't find Ricky man";
let secondResult = firstRegex.text(notFirst);
console.log(secondResult);
