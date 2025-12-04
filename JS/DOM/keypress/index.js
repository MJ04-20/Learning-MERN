const box=document.getElementById("myDiv");
window.addEventListener("keydown",move);
let x=0;
    let y=0;
function move(event){
    
    switch(event.key) {

        case "ArrowDown":
            y+=5;
            console.log("y=",y);
            box.style.top=y+"px";
            break;
        
        case "ArrowUp":
            y-=5;
            console.log("y=",y);
            box.style.top=y+"px";
            break;
        
        case "ArrowLeft":
            x-=5;
            console.log("x=",x);
            box.style.left=x+"px";
            break;
        
        case "ArrowRight":
            x+=5;
            console.log("x=",x);
            box.style.left=x+"px";
            break;
        default:
            break;
    }
}