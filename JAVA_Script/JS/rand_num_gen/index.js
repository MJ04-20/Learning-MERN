
document.getElementById("btn").onclick=function(){
let x=Math.random(); 
x=x*100;
// x=(Math.random()*6) // number generated b/w 0 to 5
document.getElementById("res").innerHTML="Random Number="+Math.floor(x);
}
