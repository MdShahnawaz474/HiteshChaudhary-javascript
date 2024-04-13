//control flow:-

/* Control flow in JavaScript refers to the order in which statements are executed in a script. It allows you to dictate the flow of execution based on conditions, loops, and function calls. Here are some common constructs used for control flow in JavaScript:*/

// If statement :-
/* Conditional Statements (if...else): These statements allow you to execute different blocks of code based on whether a condition is true or false. */

let x= 5;

if (x==5) {
    console.log(x)
}else{
    console.log("Error")
}

// comparisons in js :-

// Comparison operators in JavaScript are used to compare two values and return a Boolean value (true or false) based on the comparison result. 

// Here are the comparison operators in JavaScript:-

// Equal (==): This operator compares two values for equality, after converting both values to a common type.

if(9==9){
    console.log("The value is true");

}else{
    console.log("the given value is wrong");
}

//equal 2-

if(9=="9"){
    console.log(true)
}else{
    console.log(false)
}

// In the equal check its only check value not the data type thats why we are using a strict check for the datatypes is same or not 


// Strict Equal (===): This operator compares both the value and the type of the operands. It returns true if both the value and the type are the same.

if ("5"===5){
    console.log(true);
}else{
    console.log(false,"Value is same but the datatype are diffrent")
};

// Not Equal (!=): This operator returns true if the operands are not equal, regardless of their types:-

if (2 !=3){
    console.log(true)
}else{
    console.log(false);
}

// Strict Not Equal (!==): This operator returns true if the operands are not equal or not of the same type.:-

if(2 !== 2) {
    console.log(true)
}else{
    console.log(false)
}

// Greater Than (>): This operator returns true if the left operand is greater than the right operand.:-

if (10>5){
    console.log(true)
}else{
    console.log(false)
}

if (8<9){
    console.log(true)
}else {
    console.log(false);
}

// Less Than (<): This operator returns true if the left operand is less than the right operand

if (5<3){
    console.log(true)
}else{
    console.log(false)
}

if(9>10){
    console.log(true)
}{
    console.log(false)
}

// Greater Than or Equal To (>=): This operator returns true if the left operand is greater than or equal to the right operand:-

if(10<=10){
    console.log(true)
}else{
    console.log(false)
}

// Less Than or Equal To (<=): This operator returns true if the left operand is less than or equal to the right operand.:-

if (5>=6){
    console.log(true)
}else{
    console.log(false);
}

// The logical AND(&&) operator returns true if both condition are true; otherwise, it returns false.:-

const dataIs=1.5
const rechargeIS=239

if(dataIs==1.5 && rechargeIS == 239){
    console.log("both are true code was runned successfully")
}else(
    console.log(false)

)

const a=5;
const b= 10;

if(b>5&& a<10){
    console.log(true)
}else{
    console.log(false)
}


// The logical OR operator returns true if at least one of the condition is true; otherwise, it returns false.

const useridIs= 474;
const userNameIs= "Ahaankhan"

if(useridIs==474 || userNameIs == "Ahankhan"){
    console.log(`user id is correct ${useridIs} but username ${userNameIs} is incorrect but code was runned succesfully `)
}else{
    console.log(false)
}

const loggedInWithGoogle= true
const loggedInWithgmail= true
const loggedInWithEmail= true

if(loggedInWithGoogle||loggedInWithgmail||loggedInWithEmail){
     console.log("User is logged in");
}else{console.log("User is not logged in");}



 