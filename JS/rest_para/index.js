let a,b,c,d,e,f,g;
a=1,b=2,c=3,d=4,e=5,f=6,g=7;

console.log(sum(a,b));
function sum(){
    return a+b;
}

// if we want to add all we use rest parameters ...

console.log(sumr(a,b,c,d,e,f));
function sumr(...numbers){//(x,y,...variable) 1,2nd will go to x and y and rest to in an array of variable
    let total=0;
    for(let number of numbers)
    {
        total+=number;
    }
    return total;
}