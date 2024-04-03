// +++++++++++++++++++++++++++++++Array:+++++++++++++++++++++++++++++++++++++++++++++++++++

const newArray= [1,2,3,4,5];

const indianHeroes= ["Shaktimaan", "Hero" , "Baalvir", "amitbadhana"];

const marvel = [ "SpiderMan", "Ironman", "Black panther"];

// console.log(newArray);

console.log(indianHeroes[0]);
console.log(indianHeroes[1]);

console.log(marvel[0]);
console.log(marvel[1]);

// this is the second way to write a array in variable
const anotherArr = new Array(1,2,3,4,5,6,7);

console.log(anotherArr[0]);

//Array methods:-

anotherArr.push(5);
console.log(anotherArr);

// .push() method is used for add the data in last index of the arrays
anotherArr.push(9);
console.log(anotherArr);

//.pop() Method used for delete data which waws in last line
// anotherArr.pop();
console.log(anotherArr);

// .unshift is used for put the value in array in the first index
anotherArr.unshift(1);
anotherArr.shift();
console.log(anotherArr);
// index of method used for know the index of the array 
// console.log(anotherArr.indexOf(2));

//.join() method use to join the array and change the datatype array to string
const newArr = anotherArr.join()

console.log(anotherArr)
console.log(newArr)
console.log(typeof newArr)


//slice

const array1= [0,1,2,3,4,5,6,7]

const array2= array1.slice(0,6);
const array3= array1.slice(1,4);

console.log("orginal array:-",array1)
console.log("A",array2);

console.log("B", array3);

// splice :- 

const spliceArray= array1.splice(1,2,3)

console.log("original array:-",array1);

console.log(spliceArray);






