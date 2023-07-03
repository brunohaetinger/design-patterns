abstract class TShirtPrototype {
  abstract clone(): TShirtPrototype;
}

class TShirt extends TShirtPrototype {
  private color: string;
  private size: string;

  constructor(color: string, size: string) {
    super();
    this.color = color;
    this.size = size;
  }

  // constructor(source: TShirt) {
  //   super();
  //   this.color = source.color;
  //   this.size = source.size;
  // }

  clone(): TShirt {
    // Create a new instance of the T-shirt and copy the properties
    const clonedTShirt = new TShirt(this.color, this.size);
    return clonedTShirt;
  }

  getColor(): string {
    return this.color;
  }

  getSize(): string {
    return this.size;
  }
}

// Usage example
const originalTShirt: TShirt = new TShirt("Red", "L");
const clonedTShirt: TShirt = originalTShirt.clone();

console.log(originalTShirt.getColor()); // Output: Red
console.log(originalTShirt.getSize()); // Output: L

console.log(clonedTShirt.getColor()); // Output: Red
console.log(clonedTShirt.getSize()); // Output: L
