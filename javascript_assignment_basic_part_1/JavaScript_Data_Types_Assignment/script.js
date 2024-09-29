function getDataType(value) {
    // Check for null first, as typeof null returns 'object'
    if (value === null) {
        return 'null';
    }
    // Check for arrays using Array.isArray
    if (Array.isArray(value)) {
        return 'array';
    }
    // Use typeof for all other types
    return typeof value;
}

// Test the function with different values
console.log("Type of 42:", getDataType(42));                   // Output: number
console.log("Type of 'Hello':", getDataType('Hello'));         // Output: string
console.log("Type of true:", getDataType(true));               // Output: boolean
console.log("Type of null:", getDataType(null));               // Output: null
console.log("Type of [1, 2, 3]:", getDataType([1, 2, 3]));     // Output: array
console.log("Type of { key: 'value' }:", getDataType({ key: 'value' })); // Output: object
console.log("Type of undefined:", getDataType(undefined));     // Output: undefined
console.log("Type of function(){}:", getDataType(function() {})); // Output: function
