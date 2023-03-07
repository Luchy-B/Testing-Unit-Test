/* eslint-disable class-methods-use-this */
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide number by zero');
    }
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

describe('Calculator', () => {
  describe('add', () => {
    test('Addition of numbers', () => {
      const calculator = new Calculator();
      expect(calculator.add(1, 2)).toBe(3);
    });

    test('Addition of numbers', () => {
      const calculator = new Calculator();
      expect(calculator.add(-11, -2)).toBe(-13);
    });

    test('Addition of numbers', () => {
      const calculator = new Calculator();
      expect(calculator.add(10, -9)).toBe(1);
    });
  });

  describe('subtract', () => {
    test('Subtract of numbers', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(4, 2)).toBe(2);
    });
    test('Subtract of numbers', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(-8, -2)).toBe(-6);
    });
    test('Subtract of numbers', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(8, 12)).toBe(-4);
    });
  });

  describe('multiply', () => {
    test('MUltiply of numbers', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(4, 2)).toBe(8);
    });
    test('MUltiply of numbers', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(-4, 30)).toBe(-120);
    });
  });
});
