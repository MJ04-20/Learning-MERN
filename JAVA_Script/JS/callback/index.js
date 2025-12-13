// callback is a function passed as arg

sum(2,3,displayDOM);

function sum(x,y,dosomething)
{
    let res=x+y;
    dosomething(res);  
}


function displayDOM(result)
{
    document.getElementById("lable1").innerHTML=result;
}