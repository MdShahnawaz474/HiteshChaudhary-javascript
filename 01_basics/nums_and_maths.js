const score = 400;

//specify the number
const balance =new Number(150);

// console.log(score);
console.log(balance);

//number can be changed to string
console.log(balance.toString());


const score_2= 5024

const blance2 = new Number(5021);

console.log(score_2);

console.log(blance2);

//when number changed to string now it can be uses like string 
console.log(blance2.toString().lastIndexOf(0));

//number can be fixed 
console.log(blance2.toFixed(2));

const otherNumber= 123.4920;

//to precision the Number
console.log(otherNumber.toPrecision(3));

const largeNumber = 10000000;

//for the large number we can use local string to know the value through comma

//for the US based value we can used only toLocaleString
console.log(largeNumber.toLocaleString());

//but Indian based value we have to used .localString("en-IN")
console.log(largeNumber.toLocaleString())

const largeNumber2 = 19492043002395;

console.log(largeNumber2.toLocaleString("en-IN"));

//++++++++++++++++++++++++++++++Maths:-+++++++++++++++++++++++++++++++++//

//In javascript math is a object for the terminal 
console.log(Math);
//Math.abs is used for to change the value negative to positive
console.log(Math.abs(-7));
//Math.round() is used for roundup the values
console.log(Math.round(5.8));
//The Math.ceil() method rounds a number rounded UP to the nearest integer.
console.log(Math.ceil(5.3));
//Math.floor() method rounds a number DOWN to the nearest integer.
console.log(Math.floor(5.9));
//Math.min() method returns the number with the lowest value.
console.log(Math.min(7,9,0));
// Math.max() method returns the number with the highest value.
console.log(Math.max(8,9,3,5));
//Math.random() method returns a random floating point number between 0 and 1 
console.log(Math.random());

//formulas for random numbers and avoid 0 and decimmal number

console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max =20;

console.log(Math.floor(Math.random()*(max-min+1))+min);

console.log(Math.floor(Math.random()*(max-min+1)+min));
