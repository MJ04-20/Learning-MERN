try {
    let x=window.prompt("Enter a number");
    x=Number(x);


    if(isNaN(x))
    {
        throw "that wasn't a num";
        
    }
    if (x=="") throw "that was empty";
    console.log(`${x} is a num`)
}
catch(error)
{
    console.log(error);
}
finally{
    console.log("this always executes");
}