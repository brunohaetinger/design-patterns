interface NetworkConnector {
  connect(): void;
}

class USBConnector {
  plugIn(): void {
    console.log("USB connected");
  }
}

class USBToNetworkAdapter implements NetworkConnector {
  private usbConnector: USBConnector;

  constructor(usbConnector: USBConnector) {
    this.usbConnector = usbConnector;
  }

  connect(): void {
    console.log("Converting USB connection to network connection");
    this.usbConnector.plugIn();
  }
}

class EthernetConnector implements NetworkConnector{
  connect(): void {
    console.log("Ethernet connected");
  }
}

// Client code
function clientCodeUsingNetworkConnector(networkConnector: NetworkConnector): void {
  networkConnector.connect();
}

const usbConnector = new USBConnector();
const usbAdapter = new USBToNetworkAdapter(usbConnector);

clientCodeUsingNetworkConnector(usbAdapter);

const ethernetConnector = new EthernetConnector();
clientCodeUsingNetworkConnector(ethernetConnector);

