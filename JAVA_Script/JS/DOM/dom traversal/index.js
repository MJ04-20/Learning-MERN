// let element=document.body;
let element=document.querySelector("#vegetables");
let sibling=element.nextElementSibling

let child=element.lastElementChild;
let child1=element.children[1];
console.log(child);
child.style.backgroundColor="lightgreen";
sibling.style.backgroundColor="lightblue";
child1.style.backgroundColor="yellow";