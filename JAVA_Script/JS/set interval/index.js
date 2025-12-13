
// setInterval(function, milliseconds) invokes a function repeatedly after every specified milliseconds invokes a fxn repetedaly after every specified milliseconds
let count=0;
let max=window.prompt("count up to what?");
const Mytimer=setInterval(countup,1000);
function countup(){
    count++;
    document.getElementById("lable1").innerHTML=count;
    if(count>=max){
        clearInterval(Mytimer);
    }
}

