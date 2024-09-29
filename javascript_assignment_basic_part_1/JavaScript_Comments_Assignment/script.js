// This is a single-line comment.
// The purpose of this program is to demonstrate the use of comments in JavaScript.

// Single-line comment example:
let greeting = "Hello, world!"; // This variable stores a greeting message

console.log(greeting); // This line prints the greeting message to the console

/*
  This is a multi-line comment.
  Now, I will create a function that returns a personalized greeting message.
*/

function personalizedGreeting(name) {
    /*
      This function takes one parameter: 'name'.
      It returns a greeting message that includes the provided name.
    */
    return "Hello, " + name + "!";
}

console.log(personalizedGreeting("John")); // Printing a personalized greeting for 'John'
