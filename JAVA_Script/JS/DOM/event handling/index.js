// addeventlistener to a div 
// you can add many event listeners to a single element
// same event can invoke many functions

const innerDiv=document.getElementById("innerDiv");
const outerDiv=document.getElementById("outerDiv");

// if same event is happning we cN USE CAPTURE TO SET EHICH WWILL HAPEN FIRST
innerDiv.addEventListener("click",changeRed);
outerDiv.addEventListener("click",changeRed,true);


function changeRed(){
    // innerDiv.style.backgroundColor="red";
    alert(`you selected ${this.id}`);
    this.style.backgroundColor="red";
}

