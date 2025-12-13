// class Rabbit{
//     alive=true;
//     name="rabbit";
//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }

//         sleep(){
//         console.log(`this ${this.name} is sleeping`);
//     }


//         run(){
//         console.log(`this ${this.name} is running`);
//     }

// }

// class Fish{
//     alive=true;
//     name="Fish";
//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }

//         sleep(){
//         console.log(`this ${this.name} is sleeping`);
//     }


//         swim(){
//         console.log(`this ${this.name} is swimming`);
//     }

// }


// class bird{
//     alive=true;
//     name="Fish";
//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }

//         sleep(){
//         console.log(`this ${this.name} is sleeping`);
//     }


//         fly(){
//         console.log(`this ${this.name} is flying`);
//     }

// }

// can be done by like this


class Animal {
    alive= "true";
    eat(){
        console.log(`this ${this.name} is eating`);
    }

        sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    alive=true;
    name="rabbit";
            run(){
        console.log(`this ${this.name} is running`);
    }

}

class Fish extends Animal{
    name="Fish";
        swim(){
        console.log(`this ${this.name} is swimming`);
    }

}


class Bird extends Animal{
    name="Fish";
        fly(){
        console.log(`this ${this.name} is flying`);
    }

}


const fish = new Fish();
const rabbit=new Rabbit();
const bird = new Bird();

console.log(rabbit.alive);
rabbit.eat();
rabbit.run();

fish.eat();
fish.swim();