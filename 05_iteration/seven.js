const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumber.map((num)=>num + 10)

// Chainning:-

const newNums= myNumber.map((num )=>num*10).map((num)=>num+1).filter((num)=> num>=20).map((num)=> num+21)

console.log(newNums);


// revise for each
const newEach = myNumber.forEach((num)=> {
    console.log(num)
});
