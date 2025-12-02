class Player{
    score =0;
    pause(){
    console.log("you have paused the game");
    }

    exit(){
        console.log("you have exited the game");
    }
}

const player1=new Player ();
const player2=new Player();

player1.score+=1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();



