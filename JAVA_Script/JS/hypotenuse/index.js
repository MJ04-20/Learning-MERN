// let a,b,c;
// a=window.prompt("Enter side a:");
// a=Number(a);
// b=window.prompt("Enter side b:");
// b=Number(b);
// c=Math.sqrt(a*a + b*b);
// console.log("Hypotenuse c =",c);

let a,b,c;
document.getElementById("btn").onclick=function(){
a=Number(document.getElementById("side_a").value);

b=Number(document.getElementById("side_b").value);
c=Math.sqrt(a*a + b*b);
document.getElementById("res").innerHTML="Result="+c;
}