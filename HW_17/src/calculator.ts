export class Calculator {
  add(num1: number, num2: number): number {
    this.checkNumericValues(num1, num2);
    return num1 + num2;
  }

  subtract(num1: number, num2: number): number {
    this.checkNumericValues(num1, num2);
    return num1 - num2;
  }

  multiply(num1: number, num2: number): number {
    this.checkNumericValues(num1, num2);
    return num1 * num2;
  }

  divide(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.checkNumericValues(num1, num2);
    return num1 / num2;
  }

  power(base: number, exponent: number): number {
    this.checkNumericValues(base, exponent);
    return Math.pow(base, exponent);
  }

  private checkNumericValues(...values: any[]): void {
    // проверим каждое переданное значение
    values.forEach(value => {
    // если значение не является числом или является NaN, показать исключение
      if (typeof value !== 'number' || isNaN(value)) {
        throw new TypeError("Non-numeric value detected");
      }
    });
  }
}