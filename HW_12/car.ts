export class Car {
    protected carName: string;
    protected engineType: string;
  
    constructor(carName: string, engineType: string) {
        this.carName = carName;
        this.engineType = engineType;
    }
  
    public getCharacteristicsCar(): string {
        return `This is ${this.carName}. It has ${this.engineType} engine`;
    }
  }

  