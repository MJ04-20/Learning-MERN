let numbers=[1,2,3,4,5,6,7,8,9];
// console.log(numbers);
console.log(...numbers);//spread operator ...
let str="hello meow";
console.log(...str);
let max;
// max=Math.max(numbers); wont work cause it take one by one not whole array
max=Math.max(...numbers);//will work now cause spread spreads it one by one
console.log(max);

let classa=["name1","name2","name3"];
let classb=["name4","name5","name6"];
// classa.push(classb); will take b as a array not as in ele
classa.push(...classb);//now will becone a single array with 6 names
console.log(classa); 