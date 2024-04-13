// While loop:-

//  a while loop in JavaScript repeatedly executes a block of code as long as a specified condition is true. It checks the condition before each iteration. If the condition is true, the loop continues; otherwise, it terminates. Here's a concise breakdown:

let index =0 
while(index<=10){
    console.log(index)
    index= index+1
}

let i = 0 
while(i<= 20){
    console.log(`the value of i is ${i} `)
    i = i+1
}

let arr=0
let myarray = ["ahaan", "ankit", "harku", "hitu"];

while (arr<myarray.length) {
    console.log(`the value of arr is ${myarray[arr]}`)
    arr=arr+1
}

let arr2= 0
let myarray2 = ["fayyaz", 'ronak', 'faishal','anup','anuj'];

while (arr2<myarray2.length) {
    console.log(`the value of arr is ${myarray2[arr2]}`)
    arr2= arr2+1
}

// do while loop:-
 
let score= 11
do {
    console.log(`score is ${score}`);
    score++
} while (score<=10){
    
};