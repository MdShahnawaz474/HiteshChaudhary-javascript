const name = "Shahnawaz";
const repoCount= 50

//there is no good way to use that type of syntax:- 

console.log(name +" "+ repoCount+ " Value")

//there is good way to  put a variable in java script:-

console.log(`Hello my name is ${name} and my repocount value is ${repoCount}`);

// there is a another way to put string i  variable

const newGame = new String("md_shahnawaz");

console.log(newGame);

//prototypes of js

//To upperCase
console.log(newGame.toUpperCase);

//To lowercase
console.log(newGame.toLowerCase);

//find the character of sting
console.log(newGame.charAt(3))

// find the index of string
console.log(newGame.indexOf("h"));

// substring used only positive value:-

const newString = newGame.substring(0,4);
console.log(newString);

// slice used positive and negative value:-

// const anotherString = newGame.slice(-8,7);
const anotherString = newGame.slice(0,7);
console.log(anotherString);


// Trim function is used for unwanted thing:-

const trimMethod = "     Ahaankhan474      "
console.log(trimMethod);
console.log(trimMethod.trim());

// replace function :-

const url= "https://ahaan.com/ahaan%20khan";

console.log(url.replace('%20', "-"));

const url2 = "https://mdshahnawaz.com/md%20shahnawaz";

console.log(url2.replace('%20', '-'));

console.log(newGame.split('_'));