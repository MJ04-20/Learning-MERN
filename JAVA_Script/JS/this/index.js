const car1={
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue",
    drive : function() {
        console.log("The car is driving");
    },   
    break: function() {
        console.log("The car is braking");
    }
}

const car2={
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue",
    drive : function() {
        console.log(`The car ${this.model} is driving`);//this to specify the current object
        // console.log(`The car ${model} is driving`);

    },   
    break: function() {
        console.log("The car is braking");
    }
}
console.log(`Car Details: ${car1.brand} ${car1.model} ${car1.year} ${car1.color}`);

car2.drive();
car1.break();