// Reduce:-

const  nums = [1,2,3]

const myTotal = nums.reduce(function(acc,currval){
    return acc + currval
}, 0)

console.log(myTotal);

// practice :-

const newNums = [1,2,3,4,5,6,];

const mytotalNums = newNums.reduce(function(acc, currval){
    console.log(`acc:${acc}and Currval is :${currval}`)
    return acc+ currval
},0);

console.log(mytotalNums);

// practice 2:-

//reduce with arrow function:-

const nums2= [1,2,3,4];

const mynums2= nums2.reduce((acc, currval)=>(acc+currval),0)

console.log(mynums2)

const shoppingCart = [
    {
        itemName : "Js course",
        price :2999
    },
    {
        itemName : "python course",
        price :1999
    },
    {
        itemName : "App dev course",
        price :1244
    },
];

const totalbill= shoppingCart.reduce((acc, item)=>acc+item.price,0) 

console.log(totalbill);

