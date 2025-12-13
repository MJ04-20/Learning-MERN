const cell=document.querySelectorAll('.cell');
const statusText=document.querySelector('#statusText');
const restartBtn=document.querySelector('#restartBtn');

const winConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options=["","","","","","","","",""];
let currentPlayer="X";
let running=true;

initializeGame();

function initializeGame(){
    cell.forEach(cell=>cell.addEventListener("click",cellClicked));
    restartBtn.addEventListener("click",restartGame);
    statusText.textContent=`${currentPlayer}'s Turn`


}

function cellClicked(){

    const cellIndex=this.getAttribute("cellIndex");
    if(options[cellIndex]!="" || !running){
        return
    }
    updatecell(this,cellIndex);
    
    checkWinner();

}

function updatecell(cell,index){
options[index]=currentPlayer;
cell.textContent=currentPlayer;
}

function changePlayer(){
    currentPlayer=(currentPlayer=="X")?"O":"X";
    statusText.textContent=`${currentPlayer}'s Turn`
}

function checkWinner(){
    let roundWon=false;
    for(let i=0;i<winConditions.length;i++){
        const conditions=winConditions[i];
        const cellA=options[conditions[0]];
        const cellB=options[conditions[1]];
        const cellC=options[conditions[2]];
        if(cellA==""||cellB==""||cellC==""){
            continue;
        }
        if(cellA==cellB && cellB==cellC){
            roundWon=true;
            break;
        }

    }
    if (roundWon){
        statusText.textContent=`${currentPlayer} WINS`;
        running=false;
    }
    else if(!options.includes("")){
        statusText.textContent=`Draw`;

    }
    else{
        changePlayer();
    }

}

function restartGame(){
    currentPlayer="X";
    options=["","","","","","","","",""];
    statusText.textContent=`${currentPlayer}'s Turn`
    cell.forEach(cell=>cell.textContent="");
    running=true;
}