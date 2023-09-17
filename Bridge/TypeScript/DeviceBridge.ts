// DeviceBridge
/* Use this pattern when you need to:
- extend a class in several orthogonal dimensions;
- be able to switch implementations at runtime;
- divide and organize a monolithic class that has several variants of some functioanality (for example, if the css can worwith various database servers)
*/

interface Device {
  isEnabled(): boolean;
  enable(): boolean;
  disable(): boolean;
  getVolume(): number;
  setVolume(percent: number): boolean;
  getChannel(): number;
  setChannel(channel: number): boolean;
}

class Radio implements Device {
  status: "ON" | "OFF";
  volume: number
  channel: number
  
  isEnabled(): boolean {
    return this.status === "ON";
  }
  enable(): boolean {
    this.status = "ON";
    return true;
  }
  disable(): boolean {
    this.status = "OFF";
    return true;
  }
  getVolume(): number {
    return this.volume;
  }
  setVolume(percent: number): boolean {
    this.volume = percent;
    return true;
  }
  getChannel(): number {
    return this.channel;
  }
  setChannel(channel: number): boolean {
    this.channel = channel;
    return true;
  }
}
class TV implements Device {
  status: "ON" | "OFF";
  volume: number
  channel: number
  
  isEnabled(): boolean {
    return this.status === "ON";
  }
  enable(): boolean {
    this.status = "ON";
    return true;
  }
  disable(): boolean {
    this.status = "OFF";
    return true;
  }
  getVolume(): number {
    return this.volume;
  }
  setVolume(percent: number): boolean {
    this.volume = percent;
    return true;
  }
  getChannel(): number {
    return this.channel;
  }
  setChannel(channel: number): boolean {
    this.channel = channel;
    return true;
  }
}

class Remote {
  device: Device;

  constructor(device: Device){
    this.device = device;
  }

  togglePower(): boolean {
    return true;
  }
  volumeDown(): boolean {
    return true;
  }
  volumeUp(): boolean {
    return true;
  }
  channelDown(): boolean {
    return true;
  }
  channelUp(): boolean {
    return true;
  }
}

// Client
const remote = new Remote(new TV());

remote.togglePower();