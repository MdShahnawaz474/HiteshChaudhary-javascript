const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async is completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})


//practice:-

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("promise 2 is compeleting")
        resolve()
    },1000)
})

promiseTwo.then(function(){
    console.log("promise two is now completed")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("another method of promise is compliting")
        resolve()
    },1000)
}).then(function(){
    console.log("another method of promise is compelited")
})


//Prmoise 3:-

const promiseThree= new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Chai ", email:"Ahaan@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour =new Promise((resolve,reject)=>{
    setTimeout(()=>{
       let error = true
       if (!error){
        resolve({username:"Ahaan_khan", password:474})
    }else{
        reject("ERROR:404")
    }
    
    },1000)
})

promiseFour
.then((user)=>{ 
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log('The Promise is either reject or resolved')
})

// promise 5 With async Await method:-

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({username:"Javascript", sortName:"JS", Documentation:"MDN"})
        }else{
            reject('ERROR :JS Went wrong')
        }
    },1000)
})

async function consumedPromiseFive(){
    try {
    const response = await promiseFive
    console.log(response);

   } catch(error){
    console.log(error);

   }
}

consumedPromiseFive()

// async function getAllUsers (){
//   try {
//     const response= await fetch("https://jsonplaceholder.typicode.com/users")
//   const data =   response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("e:",error)
//   } 
    
// }

async function getAllUsers (){
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json(); // Added await here
      console.log(data);
    } catch (error) {
      console.log("e:", error);
    } 
  }
  

getAllUsers()

// fetch ("https://api.dictionaryapi.dev/api/v2/entries/en/<word>").then((response)=>{
//     return response.json()

// }).then((data)=>{
//     console.log(data);
// }).then