import {Calculator} from '../src/calculator';

let calculator: Calculator;
calculator = new Calculator();
let result: number;

export let addFunction: (num1: number, num2: number) => number;
    addFunction = calculator.add.bind(calculator);
    //result = 0;

export let subtractFunction: (num1: number, num2: number) => number;
    subtractFunction = calculator.subtract.bind(calculator);
    result = 0;

export let multiplyFunction: (num1: number, num2: number) => number;
    multiplyFunction = calculator.multiply.bind(calculator);
    result = 0;

export let divideFunction: (num1: number, num2: number) => number;
    divideFunction = calculator.divide.bind(calculator);
    result = 0;

export let powerFunction: (num1: number, num2: number) => number;
    powerFunction = calculator.power.bind(calculator);
    result = 0;













