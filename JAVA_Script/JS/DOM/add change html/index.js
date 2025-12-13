// const nameTag=document.createElement("h1");
// // nameTag.innerHTML=window.prompt("enter your name"); // try to avoid innerHTML if user input as user can put virus/etc
//  nameTag.innerText=window.prompt("enter your name"); 
// document.body.append(nameTag);

const myList=document.querySelector("#fruit");
const listItems=document.createElement("li");
listItems.textContent="mango";
// myList.append(listItems);

myList.insertBefore(listItems,myList.getElementsByTagName("li")[1]);