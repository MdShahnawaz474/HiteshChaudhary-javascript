// const insta_user = new Object();

const tinderUser = {}

tinderUser.id= "abc231";
tinderUser.name="ahaankhan";
tinderUser.userName="ahaankhan474";
tinderUser.IsloggedIn=false

// console.log(tinderUser);

const AnotherApp= {
    email: "some@google.com",
    name:{
        fullname:{
            firstName:"MD",
            lastName:"Shahnawaz",
        }
    }
};

console.log(AnotherApp.name);

console.log(AnotherApp.name.fullname);

const obj1= {1:"A", 2: "B", 3:"C"}
const obj2= {4:"D", 5: "E", 6: "F" }
//Method of combining the Object 
const obj3= Object.assign({}, obj1,obj2);
console.log(obj3);

//Most usable method of combibining object :-

const obj4= {...obj1,...obj2}
console.log(obj4);

const users=[
    {
        Id:1,
        Name:"Ahaan",
        email :"fakegmail@google.com",
    },
]

// users[1].email

console.log(tinderUser);
//Find the key of the object we Use this Method:-
console.log(Object.keys(tinderUser));

//find the values of object we use this method:-
console.log(Object.values(tinderUser));

//find the entries of object:-

console.log(Object.entries(tinderUser));

//asking the data from object it is or not 
//This method gives you answer in boolean value

console.log(tinderUser.hasOwnProperty("IsloggedIn"))

const courseHindi = {
    courseName : "JS in hindi",
    courseFee : "999",
    Mentor : "Hitesh_Chaudhary"
}

// courseHindi.courseName

const {Mentor}= courseHindi

console.log(Mentor);

const {courseName}= courseHindi;

console.log(courseName);

console.log(Object.keys(courseHindi));
console.log(Object.values(courseHindi));
console.log(courseHindi.hasOwnProperty("Mentor"));

const {courseName:name}= courseHindi

console.log(name);
