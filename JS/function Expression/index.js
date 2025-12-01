let count=0;

document.getElementById("incbtn").onclick=function(){
    count++;
   document.getElementById("lable1").innerHTML=count;

}


document.getElementById("decbtn").onclick=function(){
    count--;
   document.getElementById("lable1").innerHTML=count;

}

// function inc(){
//     count++;
//     document.getElementById("lable1").innerHTML=count;
// }

// function dec(){
//     count--;
//     document.getElementById("lable1").innerHTML=count;
// }

