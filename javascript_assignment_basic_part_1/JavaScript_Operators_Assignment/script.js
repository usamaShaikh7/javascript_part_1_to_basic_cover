function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2; // Addition
            break;
        case '-':
            result = num1 - num2; // Subtraction
            break;
        case '*':
            result = num1 * num2; // Multiplication
            break;
        case '/':
            // Check for division by zero
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            result = num1 / num2; // Division
            break;
        default:
            return "Error: Invalid operator. Please use +, -, *, or /.";
    }

    return result;
}

// Example usage:
console.log(calculator(10, 5, '+')); // Output: 15
console.log(calculator(10, 5, '-')); // Output: 5
console.log(calculator(10, 5, '*')); // Output: 50
console.log(calculator(10, 5, '/')); // Output: 2
console.log(calculator(10, 0, '/')); // Output: Error: Division by zero is not allowed.
console.log(calculator(10, 5, '%')); // Output: Error: Invalid operator. Please use +, -, *, or /.
