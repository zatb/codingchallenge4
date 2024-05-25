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
}