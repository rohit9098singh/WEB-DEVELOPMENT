-class Calculator {
    constructor() {
      this.result = 0; // Initialize result to 0
    }
  
    // Adds a number to the result
    add(number) {
      this.result += number;
    }
  
    // Subtracts a number from the result
    subtract(number) {
      this.result -= number;
    }
  
    // Multiplies the result by a number
    multiply(number) {
      this.result *= number;
    }
  
    // Divides the result by a number
    divide(number) {
      if (number === 0) {
        throw new Error('Cannot divide by zero.'); // Handling division by zero
      }
      this.result /= number;
    }
  
    // Clears the result, setting it back to 0
    clear() {
      this.result = 0;
    }
  
    // Returns the current result
    getResult() {
      return this.result;
    }
  
    // Calculates the result of a given expression
    calculate(expression) {
      // Remove all whitespace from the expression
      const cleanedExpression = expression.replace(/\s+/g, '');
  
      // Validate the expression to ensure it only contains valid characters
      if (!/^[\d+\-*/().]+$/.test(cleanedExpression)) {
        throw new Error('Invalid characters in the expression.');
      }
  
      // Check for balanced parentheses
      let openParentheses = 0;
      for (const char of cleanedExpression) {
        if (char === '(') openParentheses++;
        if (char === ')') openParentheses--;
        if (openParentheses < 0) {
          throw new Error('Unmatched closing parenthesis.');
        }
      }
      if (openParentheses !== 0) {
        throw new Error('Unmatched opening parenthesis.');
      }
  
      // Use eval to evaluate the expression
      try {
        this.result = eval(cleanedExpression);
      } catch (error) {
        throw new Error('Invalid expression: ' + error.message);
      }
    }
  }
  
  
  