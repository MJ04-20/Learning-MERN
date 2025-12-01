let answer=Math.floor(Math.random()*10+1);
let guesses=0;

document.getElementById("submitBtn").onclick =function(){
    let input=document.getElementById("guessInput").value;
    input=Number(input);
    guesses+=1;
    if(input===answer){
    alert(`${answer} is correct! You guessed it in ${guesses} guesses.`);
    resetGame();
    }     
    else if(input<answer){
        alert("Too low! Try again.");
    }
    else{
        alert("Too high! Try again.");
    }  
}

function resetGame(){
    answer=Math.floor(Math.random()*10+1);
    guesses=0;}
