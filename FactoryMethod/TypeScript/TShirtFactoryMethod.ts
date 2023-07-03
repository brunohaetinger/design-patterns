class TShirt {
  constructor(private team: string, private colors: string[]){}

  print(){
    console.log(`${this.team}'s T-shirt with colors ${this.colors.join(", ")}.`)
  }
}

abstract class TShirtFactory {
  public abstract createTShirt(): TShirt;
}

class BarcelonaTShirtFactory extends TShirtFactory {
  public createTShirt(): TShirt {
      return new TShirt("Barcelona", ["#a50044", "#004d98"]);
  }
}

class RealMadridTShirtFactory extends TShirtFactory {
  public createTShirt(): TShirt {
    return new TShirt("Real Madrid", ["#FFFFFF", "#febe10"])
  }
}

// Usage example
const barcelonaFactory: TShirtFactory = new BarcelonaTShirtFactory();
const barcelonaTShirt: TShirt = barcelonaFactory.createTShirt();

const realMadridFactory: TShirtFactory = new RealMadridTShirtFactory();
const realMadridTShirt: TShirt = realMadridFactory.createTShirt();


barcelonaTShirt.print();
