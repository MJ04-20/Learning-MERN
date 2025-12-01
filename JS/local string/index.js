let num=123546578.123;

let myNum=num.toLocaleString("en-US");//us english
console.log(myNum);

myNum=num.toLocaleString("hi-IN");
console.log(myNum);

myNum=num.toLocaleString("en-US",{style:"currency",currency:"USD"});
console.log(myNum);

myNum=num.toLocaleString("hi-IN",{style:"currency",currency:"INR"});
console.log(myNum);
// can also be used for units and all like km celcius 