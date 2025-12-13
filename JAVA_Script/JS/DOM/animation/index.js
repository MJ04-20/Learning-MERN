const box=document.getElementById('myDiv');
mybtn.addEventListener("click",animante);
// let x=0;
// let y=0;
// let degr=0;

// function animante (){
//     let timeid=null;
//     timeid=setInterval(frame,5);
//     function frame(){
//         if(x>200 || y>200){
//             clearInterval(timeid);
//         }
//         else
//         {
//             degr+=5;
//             x+=5;
//             y+=5;
//             console.log(x+"  "+y);
//             box.style.top=y+"px";
//             box.style.left=x+"px";
//             box.style.transform=("rotatez("+degr+"deg");
//         }
//     }
    
// }

let scalex=1;
let scaley=1;
function animante (){
    let timeid=null;
    timeid=setInterval(frame,5);
    function frame(){
        if(scalex>=2){
            clearInterval(timeid);
        }
        else
        {
           scalex+=0.01;
           
           scaley+=0.01;
           box.style.transform=("scale("+scalex+","+scaley+")");
        }
    }
    
}