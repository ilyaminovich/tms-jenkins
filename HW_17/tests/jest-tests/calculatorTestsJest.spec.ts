import {Calculator} from '../../src/calculator';


describe('Jest', () => {
    let calculator: Calculator;
    let result: number;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
  
    describe('Addition', () => {
      test('Addition of positive numbers', () => {
        const result = calculator.add(2, 3);
        expect(result).toBe(5);
    });
  
      test('Adding a positive and negative number', () => {
        result = calculator.add(5, -3);
        expect(result).toBe(2);
      });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        const result = () => calculator.add('2' as any, 3);
        expect(result).toThrow(TypeError);
        });

      test('Error when passing a non-numeric value as the second argument', () => {
        const result = () => calculator.add(2, '3' as any);
        expect(result).toThrow(TypeError);
      });
     });
  

    describe('Subtraction', () => {
      test('Subtracting a positive number', () => {
        result = calculator.subtract(5, 3);
        expect(result).toBe(2);
      });
  
      test('Subtracting a Negative Number', () => {
        result = calculator.subtract(5, -3);
        expect(result).toBe(8);
        });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        const result = () => calculator.subtract('5' as any, 3);
        expect(result).toThrow(TypeError);
       });
  
      test('Error when passing a non-numeric value as the second argument', () => {
        const result = () => calculator.subtract(5, '3' as any);
        expect(result).toThrow(TypeError);
       });
  });
  
  
    describe('Multiplication', () => {
      test('Multiplying Positive Numbers', () => {
        result = calculator.multiply(2, 3);
        expect(result).toBe(6);
      });
  
      test('Multiplying Negative Numbers', () => {
        result = calculator.multiply(-2, -3);
        expect(result).toBe(6);
        });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        const result = () => calculator.multiply('2' as any, 3);
        expect(result).toThrow(TypeError);
        });
      
      test('Error when passing a non-numeric value as the second argument', () => {
        const result = () => calculator.multiply(2, '3' as any);
        expect(result).toThrow(TypeError);
        });
    });
  
  
    describe('Division', () => {
      test('Dividing positive numbers', () => {
        result = calculator.divide(6, 3);
        expect(result).toBe(2);
      });
  
      test('Dividing negative numbers', () => {
        result = calculator.divide(-6, -3);
        expect(result).toBe(2);
        });
  
      test('Division by zero', () => {
        const result = () => calculator.divide(6, 0);
        expect(result).toThrow("Division by zero is not allowed");
        });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        const result = () => calculator.divide('6' as any, 2);
        expect(result).toThrow(TypeError);
        });
      
      test('Error when passing a non-numeric value as the second argument', () => {
        const result = () => calculator.divide(6, '2' as any);
        expect(result).toThrow(TypeError);
        });
    });
  
  
    describe('Power', () => {
      test('Raising a number to a power', () => {
        result = calculator.power(2, 3);
        expect(result).toBe(8);
      });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        const result = () => calculator.power('2' as any, 3);
        expect(result).toThrow(TypeError);
        });
      
      test('Error when passing a non-numeric value as the second argument', () => {
        const result = () => calculator.power(2, '3' as any);
        expect(result).toThrow(TypeError);
        });
    });
  
  
   //код, который нужно выполнить после каждого теста
      afterEach(() => {
    });
  });
