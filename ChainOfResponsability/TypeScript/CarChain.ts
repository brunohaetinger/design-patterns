// CarChain

enum AssembleRequest {
  TIRE, ENGINE, BRAKES, CHASSIS, FRAME //...
}

interface CarHandler {
  setNext(h: CarHandler);
  canHandle(request: AssembleRequest): boolean;
  assemble(request: AssembleRequest);
}

class CarSimpleHandler implements CarHandler {
  next: CarHandler;

  setNext(h: CarHandler): void {
    this.next = h;
  }

  canHandle(request: AssembleRequest): boolean {
    return false;
  }

  assemble(request: AssembleRequest) {
    if(this.next != null){
      this.next.assemble(request)
    }
  }
}

class TireHandler extends CarSimpleHandler {
  canHandle(request: AssembleRequest): boolean {
    return request === AssembleRequest.TIRE;
  }
  
  assemble(request: AssembleRequest): void {
    if(this.canHandle(request)){
      console.log("Assembled car tires !")
    } else {
      super.assemble(request);
    }
  }
}

class EngineHandler extends CarSimpleHandler {
  canHandle(request: AssembleRequest): boolean {
    return request === AssembleRequest.ENGINE;
  }
  
  assemble(request: AssembleRequest): void {
    if(this.canHandle(request)){
      console.log("Assembled car Engine !")
    } else {
      super.assemble(request);
    }
  }
}

class BrakesHandler extends CarSimpleHandler {
  canHandle(request: AssembleRequest): boolean {
    return request === AssembleRequest.BRAKES;
  }
  
  assemble(request: AssembleRequest): void {
    if(this.canHandle(request)){
      console.log("Assembled car Brakes !")
    } else {
      super.assemble(request);
    }
  }
}


const tHandler = new TireHandler();
const eHandler = new EngineHandler();
const bHandler = new BrakesHandler();

tHandler.setNext(eHandler);
eHandler.setNext(bHandler);

tHandler.assemble(AssembleRequest.BRAKES);