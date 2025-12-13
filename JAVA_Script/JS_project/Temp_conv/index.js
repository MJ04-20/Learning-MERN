
document.getElementById("convertButton").onclick=function(){    

    let temp;
    if(document.getElementById("buttonc").checked){
        temp=Number(document.getElementById("tempInput").value)
         document.getElementById("result").innerHTML="Temp in F is  "+tofahr(temp);
    }
    else if(document.getElementById("buttonf").checked){
    temp=Number(document.getElementById("tempInput").value)
         document.getElementById("result").innerHTML="Temp in C is  "+tocel(temp);
        
    }
    else{
        document.getElementById("result").innerHTML="Pls Select the unit of input";
        
    }



}

function tocel(temp){
    return (temp-32)*5/9;
}
function tofahr(temp){
    return (temp*9/5)+32;
}