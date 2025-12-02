// setTimeout()=invokes a fxn after number of mil sec
//  async fxn don't pause the execution execution of prog

let timer1=setTimeout(firstMessage,3000);
let timer2=setTimeout(secondMessage,6000);

let timer3=setTimeout(thirdMessage,1200);


function firstMessage()
{
    alert(`meowmeowmeowmomewoweo`);
}
function secondMessage()
{
    alert(`barkbark`);
}
function thirdMessage()
{
    alert(`barmeodfwiuhfsakhu`);
}

document.getElementById("mybutton").onclick=function(){
    clearTimeout(timer1);
    clearTimeout(timer2);

    clearTimeout(timer3);

}