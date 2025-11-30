document.getElementById("btn1").onclick=function(){
const mycheckbox=document.getElementById("check_box");
const visabtn=document.getElementById("visa_btn");
const mstbtn=document.getElementById("master_btn");
const rubtn=document.getElementById("ru_btn");

    if(mycheckbox.checked==true){
    document.getElementById("lable1").innerHTML="Checkbox is checked";
}
else{
    document.getElementById("lable1").innerHTML="Checkbox is not checked";  
}
if(visabtn.checked==true){
    console.log("Visa is selected");
}
else if(mstbtn.checked==true){
    console.log("Master card is selected");
}   
else if(rubtn.checked==true){
    console.log("Ru pay is selected");
}    
else{
    console.log("No card is selected");
}   
}
