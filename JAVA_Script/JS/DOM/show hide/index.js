const btn=document.querySelector("#mybtn");
const img=document.querySelector("#myImage");

btn.addEventListener("click",()=>{
    if(img.style.display=="none"){
        img.style.display="block";
    }
    else{
        img.style.display="none";
    }
})