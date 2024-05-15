import {Calculator} from '../../src/calculator';



describe('Jest', () => {
    let calculator: Calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
  
    describe('Addition', () => {
      test('Addition of positive numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
      });
  
      test('Adding a positive and negative number', () => {
        expect(calculator.add(5, -3)).toBe(2);
      });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        expect(() => calculator.add('2' as any, 3)).toThrow(TypeError);
        });

      test('Error when passing a non-numeric value as the second argument', () => {
        expect(() => calculator.add(2, '3' as any)).toThrow(TypeError);
      });
     });
  
    describe('Subtraction', () => {
      test('Subtracting a positive number', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
      });
  
      test('Subtracting a Negative Number', () => {
        expect(calculator.subtract(5, -3)).toBe(8);
        });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        expect(() => calculator.subtract('5' as any, 3)).toThrow(TypeError);
       });
  
      test('Error when passing a non-numeric value as the second argument', () => {
        expect(() => calculator.subtract(5, '3' as any)).toThrow(TypeError);
       });
  });
  
  
    describe('Multiplication', () => {
      test('Multiplying Positive Numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
      });
  
      test('Multiplying Negative Numbers', () => {
        expect(calculator.multiply(-2, -3)).toBe(6);
        });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        expect(() => calculator.multiply('2' as any, 3)).toThrow(TypeError);
        });
      
      test('Error when passing a non-numeric value as the second argument', () => {
        expect(() => calculator.multiply(2, '3' as any)).toThrow(TypeError);
        });
    });
  
  
    describe('Division', () => {
      test('Dividing positive numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
      });
  
      test('Dividing negative numbers', () => {
        expect(calculator.divide(-6, -3)).toBe(2);
        });
  
      test('Division by zero', () => {
        expect(() => calculator.divide(6, 0)).toThrow("Division by zero is not allowed");
        });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        expect(() => calculator.divide('6' as any, 2)).toThrow(TypeError);
        });
      
      test('Error when passing a non-numeric value as the second argument', () => {
        expect(() => calculator.divide(6, '2' as any)).toThrow(TypeError);
        });
    });
  
  
    describe('Power', () => {
      test('Raising a number to a power', () => {
        expect(calculator.power(2, 3)).toBe(8);
      });
  
      test('Error when passing a non-numeric value as the first argument', () => {
        expect(() => calculator.power('2' as any, 3)).toThrow(TypeError);
        });
      
      test('Error when passing a non-numeric value as the second argument', () => {
        expect(() => calculator.power(2, '3' as any)).toThrow(TypeError);
        });
    });
  
  
   //код, который нужно выполнить после каждого теста
      afterEach(() => {
    });
  });
