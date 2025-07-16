// ===== Creating a class ====

// A class is a blueprint or template that represents some type of objects in our application.
// We use Classes to generate objects.

// Here is a blueprint of a Vehicle for our racing simulation game
export default class Vehicle {
  // These are the properties and the types of every vehicle object
  brand: string;
  model: string;
  year: string;
  color: string;
  odometer: number;
  isRunning: boolean;

  // The constructor, is the function that initializes the new object's properties
  constructor(
    brand: string,
    model: string,
    year: string,
    color: string,
    odometer = 0
  ) {
    // The "this" keyword is the new object being initialize inside the class
    // this.object property = parameter
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.odometer = odometer;
    // we can also have properties that gets initialize without needing a parameter
    this.isRunning = false;
  }

  // here we can create the object's functionality or methods.
  // let's create a way to start our vehicle
  start(): void {
    this.isRunning = true;
  }
}

// Now is time to create some vehicles

// if we want the constructor function to run we need to use the keyword "new" in front of the class name
const myVehicle = new Vehicle("Nissan", "GTR", "2025", "white");

// lets see our vehicle:
console.log(myVehicle);

// lets turn it on:
myVehicle.start();

// lets see the state of the vehicle now that we turned it on:
console.log(myVehicle);

if (myVehicle.isRunning) {
  console.log(`${myVehicle.brand} ${myVehicle.model} takes the lead`);
  myVehicle.odometer += 5; // increase the odometer
}

// lets look at the odometer now:
console.log(myVehicle);