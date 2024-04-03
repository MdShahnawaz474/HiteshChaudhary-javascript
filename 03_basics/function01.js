function sayMyName(){
    console.log("A");
    console.log("h");
    console.log("a");
    console.log("a");
    console.log("n");
}
 //execution method of function
sayMyName();

//function 2 :-

function addNumber(number1,number2){
    console.log(number1+number2);
}

addNumber(4,9);

//function 3 

function num(number1, number2){
    let result = number1+number2;
    return result;
}
 
const result = num(1,1);

console.log(result);

//function 3 practice :-

function addTwoNumber(num1,num2){
    let result2= num1+num2
    return result2
}

let result2 = addTwoNumber(4,5);
console.log(result2);

//practice :-

function addThreeNumber(num1,num2,num3){
    let res = num1+num2+num3
    return res
}

let res =  addThreeNumber(5,9,3)
console.log(res);

// practice :-

function addFourNumber (num1, num2 , num3 , num4){
    let output= num1+num2+num3+num4
    return output
}

let output = addFourNumber(7,3,2,1);

console.log(output);

// practice 4
//Return and direct declare function:
function subtactNum(num1 , num2){
    let sub= num1-num2;
    return sub

}

const sub = subtactNum(10,3);

console.log(sub);

//method 4
//Named Function

function loggedIn(username){
    return `HI ${username} just logged in`
}

console.log(loggedIn("ahaan"));

