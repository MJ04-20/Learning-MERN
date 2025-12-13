// let element=document.getElementById("heading1");
// element.style.backgroundColor="lightgreen";


let fruits=document.getElementsByName("fruits");

fruits.forEach(fruit=>{
    if(fruit.checked){
        console.log(fruit.value);
    }
});
// // console.log((fruits));

// // console.log((fruits[1]));

let vegetables=document.getElementsByTagName("li");
vegetables[1].style.backgroundColor="lightgreen";


let desserts=document.getElementsByClassName("desserts")
desserts[1].style.backgroundColor="lightblue";

let elementQ1=document.querySelector("#heading1");
elementQ1.style.backgroundColor="lightpink";


let elementQ2=document.querySelector(".desserts");
elementQ2.style.backgroundColor="lightpink";//only takes the first element if want all then use querySelectorAll


let elementQ3=document.querySelectorAll(".desserts");
elementQ3[2].style.backgroundColor="brown";

let elementQ4=document.querySelectorAll("li");
elementQ4[2].style.backgroundColor="blue";