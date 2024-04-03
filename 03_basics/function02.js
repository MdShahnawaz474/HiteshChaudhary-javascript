//++++++++++++++++++++++++++++++++++++++++Function:-++++++++++++++++++++++++++++++

function calculateCart (num1){
    return num1
}

//Expected Output 200
console.log(calculateCart(200,344,55))

//But with rest operator we can pass multiple value 

function calculateCart2(...num1){
    return num1
}

//Its gives you all of the value in array format [200,3000,599,400]
console.log(calculateCart2(200,3000,599,400));

function calculateCart3 (val1,val2, ...num1){
    return num1
}
//When you are passing the para meter in calculateCart3 val1,val2 
//it will show only the value  after the val1 val2 parameter it 

//Expeted value [4241,6432]
console.log(calculateCart3(123,412,4241,6432));

//practice :-

function calculateCart4(val1, val2, val3, ...num1){
    return val2, num1
}

//Expected output val2 aur another num1 values [ 634, 3244, 584 ]
console.log(calculateCart4(5893,905,5424,634,3244,584));

//Object in function :-
//New Object :-

const Cart = {
    Product:"I phone 15 pro",
    price: 123999,
    warranty:"1year Warranty",
    manufacturedBy :"India"
}

function cartFuction(anyObject){
    console.log(`Product name is ${anyObject.Product} And Product price is ${anyObject.price} And with ${anyObject.warranty} from service center manufactured By ${anyObject.manufacturedBy}`);
}

// cartFuction(Cart);

//Second method :-

//first we make a function after that we make a object:-

function cartFuction(anyObject){
    console.log(`Product name is ${anyObject.Product} And Product price is ${anyObject.price} And with ${anyObject.warranty} from service center manufactured By ${anyObject.manufacturedBy}`);
}

cartFuction({
    Product:"Samsung A30",
    price:"2000",
    warranty:"6 month",
    manufacturedBy:"out of warranty"
});

//Array in function :-

//New array :-

const arr = [200,2300.500];

function myNewarray(getArray){
    return getArray
}

console.log(myNewarray(arr[1]))
console.log(myNewarray([200,400,400]));