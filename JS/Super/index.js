
class Animal {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
class Rabbit extends Animal{

    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed=runSpeed;
    }
}

class Fish extends Animal{
    
    constructor(name,age,swimSpeed){
        super(name,age);
    
        this.swimSpeed=swimSpeed;
    }
}


class Bird extends Animal{

    
    constructor(name,age,flySpeed){
        super(name,age);
    
        this.flySpeed=flySpeed;
    }
}



const rabbit=new Rabbit("rab",1,40);

const fish=new Fish("FI",5,56);

const birdt=new Bird("Bir",3,30);

console.log(rabbit.name);
console.log(rabbit.runSpeed);
console.log(rabbit.age);


console.log(fish.name);
console.log(fish.swimSpeed);
console.log(fish.age);