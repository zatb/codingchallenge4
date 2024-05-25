//U36432650

//Implement a car class with a constructor that initializes the make (brand of the car) and the speed (curren speed in km/h) properites.

accelerate_kmh = 20
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
        super(make, current_kmh);
        this.charge = charge;
    }

//Implement a chargeBattery method in the EV class that takes an argument chargeTo and sets the battery charge to this value.
chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log (`${this.make}'s battery is charged to ${this.charge}%.`);
    }  
    
//Override the accelerate method in the EV class to increase the car's speed by 20 km/h and decrease the battery charge by 1%.
accelerate(){
    super.accelerate();
    this.charge -= 1;
    console.log (`Battery level: ${this.charge}%`); 
    }
}

//Create an EV object using the provided test data and experiment with calling the accelerate, brake, and chargeBattery methods.
const tesla = new EV('Tesla', 120, 23);

//Observe and document the behavior of the EV object, particularly how the battery charge impacts the ability to accelerate.
console.log("Initial state:");
console.log(`Speed: ${tesla.current_kmh} km/h, Battery charge: ${tesla.charge}%`);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(50);

tesla.accelerate();
tesla.brake();

tesla.accelerate();
tesla.brake();

console.log("After performing actions:");
console.log(`Speed: ${tesla.current_kmh} km/h, Battery charge: ${tesla.charge}%`);