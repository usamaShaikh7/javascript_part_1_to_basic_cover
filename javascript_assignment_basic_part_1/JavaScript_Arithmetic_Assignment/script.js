// Function to perform arithmetic operations
function performArithmeticOperations(num1, num2) {
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    
    // Check for division by zero
    let division;
    if (num2 !== 0) {
        division = num1 / num2;
    } else {
        division = "Error: Division by zero is not allowed.";
    }

    // Log results to the console
    console.log("Addition:", addition);
    console.log("Subtraction:", subtraction);
    console.log("Multiplication:", multiplication);
    console.log("Division:", division);
}

// Get user input for two numbers
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

// Call the function with user-provided numbers
performArithmeticOperations(num1, num2);
