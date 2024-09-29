function scopeExample() {
    // Using var
    if (true) {
        var x = 10;  // var has function scope
        console.log("Inside if block with var:", x); // Output: 10
    }
    console.log("Outside if block with var:", x); // Output: 10
    
    // Using let
    if (true) {
        let y = 20;  // let has block scope
        console.log("Inside if block with let:", y); // Output: 20
    }
    console.log("Outside if block with let:", y); // Error: y is not defined
}

scopeExample();
