// todo Find More Than the First Match

//? You can have multiple flags on your regex like /search/gi

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/gi;
console.log(testStr.match(ourRegex));
