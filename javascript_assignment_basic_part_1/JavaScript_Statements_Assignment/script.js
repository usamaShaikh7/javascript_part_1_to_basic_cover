// decleard statment : decleard a veriable called name
let = "myName";

// Assignment statment : assign the value of 'usama' to the variable 'myName'
myName = "usama";

// function declearation : decleard a function in "greet" that take a prameter
function greet(person)
{
    console.log("hello" + person +"!"); // greet massage to the consol

}

// conditional statment : check if the name is not empity and call the greet function
if(myName !== "")
{
    greet(myName); // call the greet function 
}
else
{
    console.log("Name is empity"); // empity name 

}

// LOOP STATMENT : loop througt number 1 to 5 and print is each number

for(i=1; i<=5;i++)
{
    console.log(i);
}