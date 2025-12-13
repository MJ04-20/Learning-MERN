class Car{
    constructor(model,year,color)
    {
        this.model=model;
        this.color=color;
        this.year=year;
    }
}



const car1=new Car("ford",2020,"blue");
const car2=new Car("bmw",2021,"yellow");
const car3=new Car("honda",2022,"green");

displayInfo(car1)
changeColor(car1,"purple");
displayInfo(car1);

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car,color){
    car.color=color;
}