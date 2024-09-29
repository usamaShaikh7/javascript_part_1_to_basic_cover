// Define a constant value for PI
const PI = 3.14159;
console.log("Value of PI:", PI); // Output: 3.14159

// Attempt to reassign the constant
try {
    PI = 3.14; // This will cause an error
} catch (error) {
    console.log("Error:", error.message); // Output: Assignment to constant variable.
}
