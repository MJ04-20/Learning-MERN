

let cards=["a","b","c","d","e","f"];

shuffel(cards);
console.log(cards);
function shuffel(array){
    let i=array.length;
    while(i){
        let swap=Math.floor(Math.random()*array.length);
        i--; 
        let temp=array[swap];
        array[swap]=array[i];
        array[i]=temp;
       
    }
   console.log(array);
}