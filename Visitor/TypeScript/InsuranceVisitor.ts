// Visitor


// ConcreteClassess may receive different visitors, but it will have all same way of calling it
// Also, as we are passing this to visitor, it will have access to class data



interface InsuranceAgentVisitor {
  visit(customer: Residential)
  visit(customer: Bank)
  visit(customer: CoffeeShop)
}

class BasicInsuranceAgent implements InsuranceAgentVisitor{
  // TS doesn't accept Method overloading, as it will compile to JS and it doesnt have types.
  visit(customer: Residential){
    console.log('Sell Medical Insurance');
  }
  visit(customer: Bank){
    console.log('Sell Theft Insurance');
  }
  visit(customer: CoffeeShop){
    console.log('Sell Fire and Flood Insurance');
  }
}


interface InsuranceCustomer{
  accept(v: InsuranceAgentVisitor)
}

class Building {
  geolocation: [number, number];
}

class Residential extends Building implements InsuranceCustomer {
  accept(v: InsuranceAgentVisitor) {
    v.visit(this)
  }
}

class Bank extends Building implements InsuranceCustomer {
  accept(v: InsuranceAgentVisitor) {
    v.visit(this)
  }
}

class CoffeeShop extends Building implements InsuranceCustomer {
  accept(v: InsuranceAgentVisitor) {
    v.visit(this)
  }
}

// Main client:

new Residential().accept(new BasicInsuranceAgent())
new Bank().accept(new BasicInsuranceAgent())
new CoffeeShop().accept(new BasicInsuranceAgent())