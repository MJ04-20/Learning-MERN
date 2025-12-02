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


const cars=[car1,car2,car3];

console.log(cars[0].model);
console.log(cars[0].year);