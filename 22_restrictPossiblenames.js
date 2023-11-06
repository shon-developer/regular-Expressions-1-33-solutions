// todo Restrict Possible Usernames

//? Change the regex userCheck to fit the constraints listed above.

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([A-z]+\d*|\d{2,})$/i; // Change this line
let result = userCheck.test(username);