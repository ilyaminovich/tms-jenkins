import {Calculator} from '../../src/calculator';
import assert from "assert";
import {expect} from "chai";



describe('Mocha + assert', () => {
  let calculator: Calculator;
  let result: number;

  //Инициализация нового экземпляра класса Calculator перед каждым тестом (каждый тест 
  //начинается с чистого состояния, не зависящего от других тестов, и предотвращает 
  //нежелательное взаимодействие между тестами)
  beforeEach(() => {
    calculator = new Calculator();
  });


  describe('Addition', () => {
    it('Сложение положительных чисел', () => {
      result = calculator.add(2, 3);
      assert.equal(result, 5, "Значения не равны");
    });
  
    it('Сложение положительного и отрицательного числа', () => {
      result = calculator.add(5, -3);
      assert.equal(result, 2, "Значения не равны");
    });
  
    it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
      const result = () => calculator.add('2' as any, 3);
      assert.throws(result, TypeError, 'Ошибка не отображается');
  });
  
    it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
      const result = () => calculator.add(2, '3' as any);
      assert.throws(result, TypeError, 'Ошибка не отображается');
    });
  });



  describe('Subtraction', () => {
    it('Вычитание положительного числа', () => {
      result = calculator.subtract(5, 3);
      assert.equal(result, 2, "Значения не равны");
    });

    it('Вычитание отрицательного числа', () => {
      result = calculator.subtract(5, -3);
      assert.equal(result, 8, "Значения не равны");
    });

    it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
      const result = () => calculator.subtract('5' as any, 3);
      assert.throws(result, TypeError, 'Ошибка не отображается');
    });

    it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
      const result = () => calculator.subtract(5, '3' as any);
      assert.throws(result, TypeError, 'Ошибка не отображается');
    });
});



  describe('Multiplication', () => {
    it('Умножение положительных чисел', () => {
      result = calculator.multiply(2, 3);
      assert.equal(result, 6, "Значения не равны");
    });

    it('Умножение отрицательных чисел', () => {
      result = calculator.multiply(-2, -3);
      assert.equal(result, 6, "Значения не равны");
    });

    it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
      const result = () => calculator.multiply('2' as any, 3);
      assert.throws(result, TypeError, 'Ошибка не отображается');
    });
    
    it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
      const result = () => calculator.multiply(2, '3' as any);
      assert.throws(result, TypeError, 'Ошибка не отображается');
    });
  });


  describe('Division', () => {
    it('Деление положительных чисел', () => {
      result = calculator.divide(6, 3);
      assert.equal(result, 2, "Значения не равны");
    });

    it('Деление отрицательных чисел', () => {
      result = calculator.divide(-6, -3);
      assert.equal(result, 2, "Значения не равны");
      });

    it('Деление на ноль', () => {
      const result = () => calculator.divide(6, 0);
      assert.throws(result, Error, 'Второй аргумент не ноль');
    });

    it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
      const result = () => calculator.divide('6' as any, 2);
      assert.throws(result, TypeError, 'Ошибка не отображается');
      });
    
    it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
      const result = () => calculator.divide(6, '2' as any);
      assert.throws(result, TypeError, 'Ошибка не отображается');
      });
  });


  describe('Power', () => {
    it('Возведение числа в степень', () => {
      result = calculator.power(2, 3);
      assert.equal(result, 8, "Значения не равны");
    });

    it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
      const result = () => calculator.power('2' as any, 3);
      assert.throws(result, TypeError, 'Ошибка не отображается');
      });
    
    it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
      const result = () => calculator.power(2, '3' as any);
      assert.throws(result, TypeError, 'Ошибка не отображается');
      });
  });


 //код, который нужно выполнить после каждого теста
    afterEach(() => {
  });
});






describe('Mocha + chai', () => {
    let calculator: Calculator;
    let result: number;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
  
    describe('Addition', () => {
      it('Сложение положительных чисел', () => {
        result = calculator.add(2, 3);
        expect(result, 'Неправильный результат сложения').to.equal(5);
      });
  
      it('Сложение положительного и отрицательного числа', () => {
        result = calculator.add(5, -3);
        expect(result, 'Неправильный результат сложения').to.equal(2);
      });
  
      it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        const result = () => calculator.add('2' as any, 3);
        expect(result, 'Неправильный результат сложения').to.throw(TypeError);
    });

      it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        const result = () => calculator.add(2, '3' as any);
        expect(result, 'Неправильный результат сложения').to.throw(TypeError);
      });
     });
  

    describe('Subtraction', () => {
      it('Вычитание положительного числа', () => {
        result = calculator.subtract(5, 3);
        expect(result, 'Неправильный результат вычитания').to.equal(2);
      });
  
      it('Вычитание отрицательного числа', () => {
        result = calculator.subtract(5, -3);
        expect(result, 'Неправильный результат вычитания').to.equal(8);
        });
  
      it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        const result = () => calculator.subtract('5' as any, 3);
        expect(result, 'Неправильный результат вычитания').to.throw(TypeError);
       });
  
       it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        const result = () => calculator.subtract(5, '3' as any);
        expect(result, 'Неправильный результат вычитания').to.throw(TypeError);
       });
  });
  
  
    describe('Multiplication', () => {
      it('Умножение положительных чисел', () => {
        result = calculator.multiply(2, 3);
        expect(result, 'Неправильный результат умножения').to.equal(6);
      });
  
      it('Умножение отрицательных чисел', () => {
        result = calculator.multiply(-2, -3);
        expect(result, 'Неправильный результат умножения').to.equal(6);
        });
  
      it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        const result = () => calculator.multiply('2' as any, 3);
        expect(result, 'Неправильный результат умножения').to.throw(TypeError);
        });
      
      it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        const result = () => calculator.multiply(2, '3' as any);
        expect(result, 'Неправильный результат умножения').to.throw(TypeError);
        });
    });
  
  
    describe('Division', () => {
      it('Деление положительных чисел', () => {
        result = calculator.divide(6, 3);
        expect(result, 'Неправильный результат деления').to.equal(2);
      });
  
      it('Деление отрицательных чисел', () => {
        result = calculator.divide(-6, -3);
        expect(result, 'Неправильный результат деления').to.equal(2);
        });
  
      it('Деление на ноль', () => {
        const result = () => calculator.divide(6, 0);
        expect(result, 'Неправильный результат деления').to.throw(Error, 'Division by zero is not allowed');
      });
  
      it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        const result = () => calculator.divide('6' as any, 2);
        expect(result, 'Неправильный результат деления').to.throw(TypeError, 'Non-numeric value detected');
        });
      
      it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        const result = () => calculator.divide(6, '2' as any);
        expect(result, 'Неправильный результат деления').to.throw(TypeError, 'Non-numeric value detected');
        });
    });
  
  
    describe('Power', () => {
      it('Возведение числа в степень', () => {
        result = calculator.power(2, 3);
        expect(result, 'Неправильный результат возведения числа в степень').to.equal(8);
      });
  
      it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        const result = () => calculator.power('2' as any, 3);
        expect(result, 'Неправильный результат возведения числа в степень').to.throw(TypeError, 'Non-numeric value detected');
        });
      
      it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        const result = () => calculator.power(2, '3' as any);
        expect(result, 'Неправильный результат возведения числа в степень').to.throw(TypeError, 'Non-numeric value detected');
        });
    });
  
  
   //код, который нужно выполнить после каждого теста
      afterEach(() => {
    });
  });
