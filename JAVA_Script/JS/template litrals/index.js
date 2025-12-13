
let name="Mrutyunjay";
let cart=5;
let total=100;

// console.log(`hello`,name);
// console.log(`cart`,cart);
// console.log(`total`,total);

let txt=`hello ${name}<br>
total items in your cart=${cart}<br>
 total price = $${total}`;
 document.getElementById("myLable").innerHTML=txt;