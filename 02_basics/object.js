//Object literals:-

const mySymbol= Symbol("mykey1");

const jsUser={
    name: "Ahaan",
    "Real name": "MD_Shahnawaz",
    age:18,
    [mySymbol]:"mykey1",
    location: "New delhi",
    email:"ahaankhan@gmail.com",
    isLoggedIn: false,
    lastLogIn:["manday 8:40pm jaipur 12/2/24"]
}


// console.log(typeof jsUser[mySymbol])

jsUser.email="ahaan@google.com";
console.log(jsUser);

// Object.freeze(jsUser);


jsUser.email= "ahaan@chatgpt.com"

jsUser.greeting= function(){
    console.log("Hello JS user");
}

jsUser.greeting2= function(){
    console.log(`Hello JS user: ${this["Real name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());





const rohitSymbol = Symbol("key2");

const js_user2= {
    name:"rohit_mehra",
    [mySymbol]:"mey_key2",
    age:12,
    location:"haryana",
    email:"rohit@chatgpt.com",

}

console.log(js_user2);

js_user2.greeting= function(){
    console.log(`Hello JS_User2 ${this.name}`);
}

console.log(js_user2.greeting());

const Newsymbol3= Symbol("My_key_3")
const jsUser3={
    name:"furkan",
    [Newsymbol3]:"My key 3",
    age:28,
    relationship_status:"Married",
    location:"Delhi",
    email:"furkanmd329@gmail.com"
}

jsUser3.greeting= function(){
    console.log(`Hello js_user3 ${this.name}`);
}

console.log(jsUser3);
console.log(jsUser3.greeting());

