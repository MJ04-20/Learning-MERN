// slice() extracts a section of a string and
//  returns it as a new string,
//  without modifying the original string.
const fullName = "Mrutyunjay Lodhi";
let firstName = fullName.slice(0,fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")+1);
console.log("First Name:",firstName);
console.log("Last Name:",lastName);

// Method chaining 
let cap_first= fullName.slice(0,fullName.indexOf(" ")).toUpperCase();
console.log("Capitalized First Name:",cap_first);