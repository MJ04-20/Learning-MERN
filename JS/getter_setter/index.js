class Car{
    constructor(power){
        this._gas=25;
        this._power=power;
    }
    get power(){//binds the obj prop to fxn when fxn is acessed
        return `${this._power} hp`;
    }
    get gas(){
        return`${this._gas}L (${this._gas/50*100}%)`;
    }

    set gas(value){//bind obj prop to a fxn when prop is assigned the valye
        if(value>50){
            value=50;
        }
        else if(value<0)
        {
            value=0;
        }
        else{
            
        }
        this._gas=value;

    }
}

let car=new Car(400);
car.gas=100;
console.log(car.power);

console.log(car.gas);