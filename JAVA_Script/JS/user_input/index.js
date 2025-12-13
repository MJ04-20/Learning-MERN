// console.log("Hello, World!"); 
// window.alert("This is alert");
/*
let firstName="MONU";
let age;
age = 25;
let student = true;

console.log("name ",firstName);
console.log("Age ",age); 
console.log("Student",student);

document.getElementById("p1").innerHTML="Hello name is "+firstName;
document.getElementById("p2").innerHTML="My age is "+age;
document.getElementById("p3").innerHTML="I am a student = "+student;
*/



// user input window promt 
/* let username=window.prompt("what's your username");
 console.log(username);
*/

 // via html
 let username;
    document.getElementById("myButton").onclick=function(){
    username=document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLable").innerHTML ="Hello "+username;

    }