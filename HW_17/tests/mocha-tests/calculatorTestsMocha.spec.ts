import {Calculator} from '../../src/calculator';
import assert from "assert";
import {expect} from "chai";



describe('Mocha + assert', () => {
  let calculator: Calculator;

  //Инициализация нового экземпляра класса Calculator перед каждым тестом (каждый тест 
  //начинается с чистого состояния, не зависящего от других тестов, и предотвращает 
  //нежелательное взаимодействие между тестами)
  beforeEach(() => {
    calculator = new Calculator();
  });


  describe('Addition', () => {
    it('Сложение положительных чисел', () => {
      assert.equal(calculator.add(2, 3), 5, "Значения не равны");
    });

    it('Сложение положительного и отрицательного числа', () => {
      assert.equal(calculator.add(5, -3), 2);
    });

    it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        assert.throws(() => calculator.add('2' as any, 3), TypeError);
    });

    it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        assert.throws(() => calculator.add(2, '3' as any), TypeError);
    });
});

  describe('Subtraction', () => {
    it('Вычитание положительного числа', () => {
      assert.equal(calculator.subtract(5, 3), 2);
    });

    it('Вычитание отрицательного числа', () => {
        assert.equal(calculator.subtract(5, -3), 8);
      });

    it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        assert.throws(() => calculator.subtract('5' as any, 3), TypeError);
     });

     it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        assert.throws(() => calculator.subtract(5, '3' as any), TypeError);
     });
});


  describe('Multiplication', () => {
    it('Умножение положительных чисел', () => {
      assert.equal(calculator.multiply(2, 3), 6);
    });

    it('Умножение отрицательных чисел', () => {
        assert.equal(calculator.multiply(-2, -3), 6);
      });

    it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        assert.throws(() => calculator.multiply('2' as any, 3), TypeError);
      });
    
    it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        assert.throws(() => calculator.multiply(2, '3' as any), TypeError);
      });
  });


    describe('Division', () => {
    it('Деление положительных чисел', () => {
      assert.equal(calculator.divide(6, 3), 2);
    });

    it('Деление отрицательных чисел', () => {
        assert.equal(calculator.divide(-6, -3), 2);
      });

    it('Деление на ноль', () => {
      assert.throws(() => calculator.divide(6, 0), "Error");
    });

    it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        assert.throws(() => calculator.divide('6' as any, 2), TypeError);
      });
    
    it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        assert.throws(() => calculator.divide(6, '2' as any), TypeError);
      });
  });


    describe('Power', () => {
    it('Возведение числа в степень', () => {
      assert.equal(calculator.power(2, 3), 8);
    });

    it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        assert.throws(() => calculator.power('2' as any, 3), TypeError);
      });
    
    it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        assert.throws(() => calculator.power(2, '3' as any), TypeError);
      });
  });


 //код, который нужно выполнить после каждого теста
    afterEach(() => {
  });
});






describe('Mocha + chai', () => {
    let calculator: Calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
  
    describe('Addition', () => {
      it('Сложение положительных чисел', () => {
        expect(calculator.add(2, 3)).to.equal(5);
      });
  
      it('Сложение положительного и отрицательного числа', () => {
        expect(calculator.add(5, -3)).to.equal(2);
      });
  
      it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        expect(() => calculator.add('2' as any, 3)).to.throw(TypeError);
        });

      it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        expect(() => calculator.add(2, '3' as any)).to.throw(TypeError);
      });
     });
  
    describe('Subtraction', () => {
      it('Вычитание положительного числа', () => {
        expect(calculator.subtract(5, 3)).to.equal(2);
      });
  
      it('Вычитание отрицательного числа', () => {
        expect(calculator.subtract(5, -3)).to.equal(8);
        });
  
      it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        expect(() => calculator.subtract('5' as any, 3)).to.throw(TypeError);
       });
  
       it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        expect(() => calculator.subtract(5, '3' as any)).to.throw(TypeError);
       });
  });
  
  
    describe('Multiplication', () => {
      it('Умножение положительных чисел', () => {
        expect(calculator.multiply(2, 3)).to.equal(6);
      });
  
      it('Умножение отрицательных чисел', () => {
        expect(calculator.multiply(-2, -3)).to.equal(6);
        });
  
      it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        expect(() => calculator.multiply('2' as any, 3)).to.throw(TypeError);
        });
      
      it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        expect(() => calculator.multiply(2, '3' as any)).to.throw(TypeError);
        });
    });
  
  
      describe('Division', () => {
      it('Деление положительных чисел', () => {
        expect(calculator.divide(6, 3)).to.equal(2);
      });
  
      it('Деление отрицательных чисел', () => {
        expect(calculator.divide(-6, -3)).to.equal(2);
        });
  
      it('Деление на ноль', () => {
        expect(() => calculator.divide(6, 0), "Error");
      });
  
      it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        expect(() => calculator.divide('6' as any, 2)).to.throw(TypeError);
        });
      
      it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        expect(() => calculator.divide(6, '2' as any)).to.throw(TypeError);
        });
    });
  
  
      describe('Power', () => {
      it('Возведение числа в степень', () => {
        expect(calculator.power(2, 3)).to.equal(8);
      });
  
      it('Ошибка при передаче нечислового значения в качестве первого аргумента', () => {
        expect(() => calculator.power('2' as any, 3)).to.throw(TypeError);
        });
      
      it('Ошибка при передаче нечислового значения в качестве второго аргумента', () => {
        expect(() => calculator.power(2, '3' as any)).to.throw(TypeError);
        });
    });
  
  
   //код, который нужно выполнить после каждого теста
      afterEach(() => {
    });
  });
