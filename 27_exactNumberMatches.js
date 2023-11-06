// todo Specify Exact Number of Matches

//? Change the regex timeRegex to match the word Timber when it has four letter m's

let timStr = "Timmmmber";
let timeRegex = /tim{4}/i; //Change this line
let result = timRegex.test(timStr);
console.log(result);
