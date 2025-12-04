// window object is the global object in browser environment
// dom is part of window object
// var name="kjdsj";
// console.log(window);
// console.log(window.name);
// console.log(window.innerHeight);

// console.log(window.scrollX);
// console.log(window.location.href);

let btn=document.querySelector("#myBtn");
btn.onclick=function(){
    window.close();
}
// btn.addEventListener("click",()=>window.close());

// window.open("https://www.google.com","_blank","width=400,height=400");

// window.alert("this is an alert");
// let a=window.confirm("are you sure you want to proceed?");
// console.log(a);
// window.print(); // opens print dialog