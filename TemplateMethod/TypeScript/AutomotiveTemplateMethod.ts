abstract class Automotor {
  seats: number;
  trunkLiters: number;
  motor: string;
  tires: string;

  // Template Method
  assembly(): string {
    this.addMotor();
    this.addTires();
    return `Seats: ${this.seats} | TrunkLiters: ${this.trunkLiters} | Motor: ${this.motor} | Tires: ${this.tires}`
  };

  abstract addMotor();
  abstract addTires();
}

class ToyotaCorolla extends Automotor {
  seats = 5;
  trunkLiters = 471;

  addMotor(): void {
    this.motor = "M20A-FKB";
  }
  addTires(): void {
    this.tires = "215/50 R17";
  }
}

class ToyotaCamry extends Automotor {
  seats = 5;
  trunkLiters = 524;
  
  addMotor(): void {
    this.motor = "A25A-FXS";
  }
  addTires(): void {
    this.tires = "235/45 R18";
  }
}

console.log(new ToyotaCorolla().assembly());
console.log(new ToyotaCamry().assembly());

export default Automotor;