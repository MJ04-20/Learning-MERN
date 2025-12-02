
class car{

    static numberofCars=0;
    constructor(model){
        this.model=model;
        // this.numberofCars++;will be same for all 3 if not static
        car.numberofCars++;
    }
    static startRace(){//can't be acessed by child only by parent
        console.log("3 2 1 go");
    }

}

const car1=new car("honda");
const car2=new car("ford");
const car3=new car("bmw");
console.log(car.numberofCars);
console.log(car.startRace());