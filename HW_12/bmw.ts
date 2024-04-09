import {Car} from './car';

export class BMW extends Car {
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

    public turnOnLights(isDaytime: boolean): void {
        if (isDaytime) {
            throw new Error('Cannot turn on lights during daytime.');
        }
        console.log('BMW: Turning on lights.');
  }
}