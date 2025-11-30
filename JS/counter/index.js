let count=0;
document.getElementById("inc").onclick = function (){
    count++;
    document.getElementById("count_lable").innerHTML = count;
}
document.getElementById("dec").onclick = function (){
    count--;
    document.getElementById("count_lable").innerHTML = count;
}
document.getElementById("rst").onclick = function (){
    count=0;
    document.getElementById("count_lable").innerHTML = count;
}