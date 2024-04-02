// in javascript there are two types of data types

// the first one is premitive 
// In premitive datatype there are 7type of datatypes:-
// string, number, boolean, null, undefined, symbol and Bigint

let playerName =  "Ahaan";
const score = 200;
const playerGame = false;
const jerseyNumber= null;
let playerstate;

const playerId=Symbol("abc123");
const AnotherId= Symbol("abc123");

console.log(playerId===AnotherId);

const bigNumber= 930091840909810938340n;



// the second one is Non premitive it is also called a refrence type:-
//Array, Objects, functions

 const playerNames= ["Virat kohli","Mahendra singh dhoni", "R Ashwin", "Sachin tendulkar"];

 let myFirstObj= {
    name: "rohit sharma",
    age: 34,
    country: "India"
}

const MyfirstFunction= function(){
    console.log("Hello world");
}

MyfirstFunction();


//++++++++++++++++++++

//there is two types of memory stack and heap memory

//stack is primitive 

let myYoutubeName = " ";

let anotheName=  myYoutubeName;
anotheName= "chai aur code";
console.log(anotheName);


// heap is nonprimitive

let userOne = {
    email:"ahaan@gmail.com",
    upiId : "ahaan@ybl",
}

let userTwo = userOne

userTwo.email= "ahaan474@gmail.com"

console.log(userOne);
console.log(userTwo);
