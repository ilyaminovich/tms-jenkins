'use strict';


/*Task 1 💻
Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar. 
Конструкт родительского класса принимает переменные марку авто и тип двигателя. 
Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто. 
Выводящий текст должен быть таким: `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>. 
Approximetly cost of the car is <carCost>`. 
(В задании используйте не только public модификатор, где это возможно)
*/
{
  class Car {
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
  
  class SportCar extends Car {
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
  }
  
  class LuxuryCar extends Car {
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
  }
  
  console.log("Task 1:");
  
  const sportCar = new SportCar("BMW", "T234", "350 km/h", "$1000000");
  console.log(sportCar.getCharacteristicsCar());
  
  const luxuryCar = new LuxuryCar("Rolls Royce", "T4", "200 km/h", "$1000001");
  console.log(luxuryCar.getCharacteristicsCar());
}




/*Task 2 💻
Создайте два объекта людей. Реализуйте метод, который выводит строку `My name is <name>`. 
И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя
*/
{
  class Person {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
    }
    
    function sayName(): void {
      console.log(`My name is ${this.name}.`);
  }
  
  const person1 = new Person("Tom");
  const person2 = new Person("Max");

  console.log("Task 2:");

  sayName.call(person1);
  sayName.call(person2);
}




/*Task 3 💻
Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль. 
В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах. 
К примеру `This car has 3 doors and this is left-hand drive car`
*/
{
  class Car {
    numberOfDoors: number;
    steeringSide: string;
  
    constructor(numberOfDoors: number, steeringSide: string) {
      this.numberOfDoors = numberOfDoors;
      this.steeringSide = steeringSide;
    }
    }
    
    function getCarInfo(): void {
      console.log(`This car has ${this.numberOfDoors} doors and this is ${this.steeringSide} drive car`);
  }
  
  const car1 = new Car(3,  "left-hand");
  const car2 = new Car(5,  "right-hand");

  console.log("Task 3:");

  getCarInfo.call(car1);
  getCarInfo.call(car2);
}



