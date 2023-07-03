interface Widget {
  render();
}

class Button implements Widget {
  constructor(private prefix: string){}

  render(){
    console.log(`${this.prefix}(__Button__)`)
  }
}

class Input implements Widget {
  constructor(private prefix: string){}
  render(){
    console.log(`${this.prefix}[______]`)
  }
}

abstract class WidgetAbstractFactory {
  abstract createButton(): Button;
  abstract createInput(): Input;
}

class IOSWidgetFactory extends WidgetAbstractFactory {
  createButton(): Button {
    return new Button("📱");
  }
  createInput(): Input {
    return new Input("📱");
  }
  
}
class AndroidWidgetFactory extends WidgetAbstractFactory {
  createButton(): Button {
    return new Button("🤖");
  }
  createInput(): Input {
    return new Input("🤖");
  }
  
}


// Usage example



const platform = "ios"
const widgetFactory: WidgetAbstractFactory = platform === "ios" ? new IOSWidgetFactory() : new AndroidWidgetFactory();
widgetFactory.createButton().render();
widgetFactory.createInput().render();
