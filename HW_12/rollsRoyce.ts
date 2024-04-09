import {Car} from './car';

export class RollsRoyce extends Car {
    private maxSpeed: string;
    private carCost: string;
  
    constructor(carName: string, engineType: string, maxSpeed: string, carCost: string) {
        super(carName, engineType);
        this.maxSpeed = maxSpeed;
        this.carCost = carCost;
    }
  
    public getCharacteristicsCar(): string {
        return `${super.getCharacteristicsCar()} and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}`;
    }

    public playRadio(station: string): void {
        if (!station) {
            throw new Error('Invalid radio station. Station must be specified.');
        }
        console.log(`RollsRoyce: Playing radio on station ${station}.`);
    }

  }

