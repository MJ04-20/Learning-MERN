const car={
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

console.log(`Car Details: ${car.brand} ${car.model} ${car.year} ${car.color}`);

car.drive();
car.break();