//Immediately Invoked function expression (IIFE)

//This is also  called name IFFE because function name is one thats why its called a name IIFE:-
(function one(){
    console.log(`DB CONNECTED`);
})(); //<= We have to put this semicolon before we want to run another IIFE function when we are not putting this semicolon browser and node environment will give error


//IIFEs is used to :- prevent pollution of the global JS scope. In a traditional function,

//Note:-Arrow functions and normal (also known as "traditional" or "function declaration")

//IMPORTANT:- The next function will not work unless we do not use ; semicolon in first IIFE function

//practice of  iife:-

(function two(){
    console.log("DB IS CONNECTED AGAIN");
})();

//Practice of IIFE with (Arrow()=>) function:-

//It Also called Unamed IIFEE because this is a arrow function and we dont have need to put name in arrow function
( ()=>{ console.log("DB CONNECTED FROM ARROW FUNCTION")} )(); //() this bracket is execute the IIFE function

//Practice 2 of IIFE with (Arrow()=>) function:-

(()=>{console.log("DB IS AGAIN CONNECTED FROM ARROW FUNCTION")})();


//passing parameter In IIFE with arrow function :-

((name)=>{console.log(`Db IS CONNECTED TO FROM ${name} SERVER`)})("MD_SHAHNAWAZ");

 