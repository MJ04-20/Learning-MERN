// const ele=document.getElementById("myBtn").onclick=doSomething;
// const ele=document.body;
// ele.onload=doSomething;

let ele=document.getElementById("txt");
ele.onchange=doSomething;
let ele2=document.getElementById("myDiv");

// ele2.onmouseover=change;
// ele2.onmouseout=changeback;
ele2.onmousedown=change;
ele2.onmouseup=changeback;
function change(){
    ele2.style.backgroundColor="blue";

}


function changeback(){
    ele2.style.backgroundColor="lightgreen";
}

function doSomething(){
    alert("Doing something!");
} 