// variable declearation

let age = 20; // decleared a variable age and assign the value 
const myName = "usama"; // decleard a const name can not change 

// function defination : a function to check if someone is an adult

function isAdult(personAge) {
    if (personAge >=18 ) {
        return true;
    }
    else{
        return false;
    }
}

// control sturcture : An if-else statment that used that function

if(isAdult(age)) {
    console.log(myName + " is adult");
}
else{
    console.log(myName +" is not adult");
}

// Loop sturcture : loop throught number from 1 to 3
for(let i=1;i<=3;i++){
    console.log("countin "+ i);
}

/* Summary of Fixes:
Always end statements with semicolons to avoid potential issues.
Ensure every opening { has a closing }.
Double-check function names and variable names for typos.
Use const for variables that don’t change and let for variables that can be reassigned.
Declare variables before using them in your program */