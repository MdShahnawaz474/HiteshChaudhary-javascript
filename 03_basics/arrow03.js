const user=  {
    username: "Hitesh",
    price: 999,


    welcomeMessage: function(){
        // console.log(`${this.username},Hello and Welcome to the website`);
        // console.log(this);//note:- its shows in node current context 
    }
}

// user.welcomeMessage() 
user.username="ahaan" //Username changed
// user.welcomeMessage();//username shows different now in node environment or browser

// console.log(this) //note:- When the not available any this on global scope  its shows in node empty object like that{}
//Practice :-

const user2 = {
    name : "rohit mehra",
    price:9899,

    WelcomeMessage2:function(){
        // console.log(`${this.name},Hello and welcome to my second practice question`);
    }
}

const user3 ={
    name :"Furkan",
    sallary:84902,

    companyMessage: function(){
        console.log(`Hello ${this.name} Welcome to  cashify`);

        // console.log(this)
    }
}

// user3.companyMessage();

user3.city="delhi";


// console.log(user3)

function chai(){
    let username = "ahaan"
    console.log(this.username);
}
// chai();

const chai2 = function(){
    let userName = "rohit mehra"
    console.log(this.username);
}
// chai2()

//New method of function it is called a arrow method:-

const arrowFunction=()=>{
    let userName ="MD Furkan"
    console.log(this.userName)
}
// arrowFunction()

const addTwo =(num1,num2)=>{
    return num1 + num2
}

// console.log(addTwo(5,5))


//practice:-

const addThree = (num1,num2,num3)=>{
    return num1 + num2 * num3
}

console.log(addThree(5,6,7)); 

//practice 3:-

const addFour =(num1,num2,num3,num4)=>{
    return num1+num3+num4*num2
}

console.log(addFour(2,3,6,7));

//Another method arrow function it called a implicit :-

const immplicit = (num1, num2)=> num1+num2

console.log(immplicit(4,5));

//implicit method practice :-

const immplicit2= (val1 , val2) => val1*val2

console.log(immplicit2(4,6));

//implicit method practice2:-

const implicit3 = (para1,para2)=> para1 + para2

console.log(implicit3("Hi ahaan ","Hello Ahaan"))

const implicit4= (rohitscore,viratscore,totalScore)=> rohitscore + viratscore === totalScore

// console.log(implicit4(10,10,20)) //it gives you boolean value (true or false);

//object in arrow and implicit method :-

const obj= (user)=>(console.log({Username:"Ahaan"}))

obj()
// console.log(obj(user));