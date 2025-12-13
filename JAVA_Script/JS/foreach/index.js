let students=["abc","def","ghi","jkl"];

students.forEach(captalize);
students.forEach(print);
// for each provides 3 arg by defafult (ele,index,array)
function captalize(element,index,array){
    array[index]=element[0].toUpperCase()+element.substring(1);

}

function print(element)
{
    console.log(element);
}