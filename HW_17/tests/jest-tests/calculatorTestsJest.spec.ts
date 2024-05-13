import {Calculator} from '../../src/calculator';
import {addFunction, subtractFunction, multiplyFunction, divideFunction, powerFunction} from "../functions";


describe('Jest', () => {
    let calculator: Calculator;
    let result: number;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
  
    describe('Addition', () => {
      test('Addition of positive numbers', () => {
        const result = addFunction(2, 3);
        expect(result).toBe(5);
    });
  
      test('Adding a positive and negative number', () => {
        result = addFunction(5, -3);
        expect(result).toBe(2);
      });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        const result = () => addFunction('2' as any, 3);
        expect(result).toThrow(TypeError);
        });

      test('Error when passing a non-numeric value as the second argument', () => {
        const result = () => addFunction(2, '3' as any);
        expect(result).toThrow(TypeError);
      });
     });
  

    describe('Subtraction', () => {
      test('Subtracting a positive number', () => {
        result = subtractFunction(5, 3);
        expect(result).toBe(2);
      });
  
      test('Subtracting a Negative Number', () => {
        result = subtractFunction(5, -3);
        expect(result).toBe(8);
        });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        const result = () => subtractFunction('5' as any, 3);
        expect(result).toThrow(TypeError);
       });
  
      test('Error when passing a non-numeric value as the second argument', () => {
        const result = () => subtractFunction(5, '3' as any);
        expect(result).toThrow(TypeError);
       });
  });
  
  
    describe('Multiplication', () => {
      test('Multiplying Positive Numbers', () => {
        result = multiplyFunction(2, 3);
        expect(result).toBe(6);
      });
  
      test('Multiplying Negative Numbers', () => {
        result = multiplyFunction(-2, -3);
        expect(result).toBe(6);
        });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        const result = () => multiplyFunction('2' as any, 3);
        expect(result).toThrow(TypeError);
        });
      
      test('Error when passing a non-numeric value as the second argument', () => {
        const result = () => multiplyFunction(2, '3' as any);
        expect(result).toThrow(TypeError);
        });
    });
  
  
    describe('Division', () => {
      test('Dividing positive numbers', () => {
        result = divideFunction(6, 3);
        expect(result).toBe(2);
      });
  
      test('Dividing negative numbers', () => {
        result = divideFunction(-6, -3);
        expect(result).toBe(2);
        });
  
      test('Division by zero', () => {
        const result = () => divideFunction(6, 0);
        expect(result).toThrow("Division by zero is not allowed");
        });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        const result = () => divideFunction('6' as any, 2);
        expect(result).toThrow(TypeError);
        });
      
      test('Error when passing a non-numeric value as the second argument', () => {
        const result = () => divideFunction(6, '2' as any);
        expect(result).toThrow(TypeError);
        });
    });
  
  
    describe('Power', () => {
      test('Raising a number to a power', () => {
        result = powerFunction(2, 3);
        expect(result).toBe(8);
      });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        const result = () => powerFunction('2' as any, 3);
        expect(result).toThrow(TypeError);
        });
      
      test('Error when passing a non-numeric value as the second argument', () => {
        const result = () => powerFunction(2, '3' as any);
        expect(result).toThrow(TypeError);
        });
    });
  
  
   //код, который нужно выполнить после каждого теста
      afterEach(() => {
    });
  });
