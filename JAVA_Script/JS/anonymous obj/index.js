class Card {
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
    }
}

// let card1=new Card("A","Heart");
// let card2=new Card("A","Spade");
// let card3=new Card("A","Diamonds");
// let card4=new Card("A","Clubs");


// let card5=new Card("2","Heart");
// let card6=new Card("2","Spade");
// let card7=new Card("2","Diamonds");
// let card8=new Card("2","Clubs");
 
//can also be used like this 

let cards=[new Card("A","Heart"),
            new Card("A","Spade"),
            new Card("A","Diamonds"),
            new Card("A","Clubs"),


            new Card("2","Heart"),
            new Card("2","Spade"),
            new Card("2","Diamonds"),
            new Card("2","Clubs")];


console.log(cards[0].value+" "+cards[0].suit);

cards.forEach(cards=>console.log(`${cards.value}  ${cards.suit}`));