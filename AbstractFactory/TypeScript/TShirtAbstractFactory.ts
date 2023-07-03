class TShirt {
  constructor(private team: string, private colors: string[]){}

  print(){
    console.log(`${this.team}'s T-shirt with colors ${this.colors.join(", ")}.`)
  }
}

abstract class TShirtAbstractFactory {
  abstract createTeamName(): string;
  abstract createColors(): string[];
}

class BarcelonaTShirtFactory extends TShirtAbstractFactory {
  createTeamName(): string {
    return "Barcelona";
  }

  createColors(): string[] {
    return ["#a50044", "#004d98"];
  }
}

class RealMadridTShirtFactory extends TShirtAbstractFactory {
  createTeamName(): string {
    return "Real Madrid";
  }

  createColors(): string[] {
    return ["#FFFFFF", "#febe10"];
  }
}

// Usage example
const barcelonaFactory: TShirtAbstractFactory = new BarcelonaTShirtFactory();
const barcelonaTShirt: TShirt = new TShirt(barcelonaFactory.createTeamName(), barcelonaFactory.createColors());

const realMadridFactory: TShirtAbstractFactory = new RealMadridTShirtFactory();
const realMadridTShirt: TShirt = new TShirt(realMadridFactory.createTeamName(), realMadridFactory.createColors());


barcelonaTShirt.print();
