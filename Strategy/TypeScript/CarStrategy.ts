// CarStrategy
interface Car {
  seats: number;
  trunkLiters: number;
  isOn: boolean;

  turnOn(): void;
}

class ToyotaCorolla implements Car {
  seats = 5;
  trunkLiters = 471;
  isOn = false;

  turnOn(): void {
    this.isOn = true;
  }
}

class JeepCommander implements Car {
  seats = 7;
  trunkLiters = 233;
  isOn = false;

  turnOn(): void {
    this.isOn = true;
  }
}

// Context
class Family {
  private car: Car;

  //SetStrategy
  setCar(car: Car){
    this.car = car;
  }

  // Execute Strategy
  rideCar(){
    this.car.turnOn();
    // next steps to ride...
  }
}

// Client
class Person {
  family: Family;

  selectCar(reason: "kidsToScholl" | "goToAirportWithLuggage") {
    switch(reason){
      case "kidsToScholl": return this.family.setCar(new JeepCommander);
      case "goToAirportWithLuggage": return this.family.setCar(new ToyotaCorolla);
    }
  }

}
