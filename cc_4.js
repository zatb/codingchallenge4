//U36432650

//Implement a car class with a constructor that initializes the make (brand of the car) and the speed (curren speed in km/h) properites.

accelerate_kmh = 10
brake_kmh = 5

class Car {
    constructor(make, current_kmh) {
      this.make = make;
      this.current_kmh = current_kmh
    }

    //Implement an accelerate method in the Car class that increases the car's speed by 10 km/h and logs the new speed to the console.

    accelerate(){
    this.current_kmh += accelerate_kmh;
    console.log (" The new speed of the " + this.make + " after accelerating " + accelerate_kmh + " KM/h is " + this.current_kmh + " KM/h. ");
    }
//Implement a brake method that decreases the car's speed by 5 km/h and logs the new speed to the console.

brake(){
    this.current_kmh -= brake_kmh;
    console.log (" The new speed of the " + this.make + " after breaking " + brake_kmh + " KM/h is " + this.current_kmh + " KM/h. ");
    }
}
//Extend the Car class to create an EV class that also includes a charge property representing the current battery charge in percentage.
class EV extends Car {
    constructor(make, current_kmh, charge) {
        super()
        this.make = make;
        this.current_kmh = current_kmh
        this.charge = charge
    }


}

//Create two Car objects using the provided test data.
//Car 1: A 'BMW' starting at 120 km/h.
car1 = new Car("BMW", 120);

//Car 2: A 'Mercedes' starting at 95 km/h.
car2 = new Car("Mercedes", 95);

//Test the accelerate and brake methods on each object, calling each method multiple times to demonstrate functionality.
console.log("Testing Car 1:");
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();

console.log("Testing Car 2:");
car2.accelerate();
car2.accelerate();
car2.brake();
car2.brake();
