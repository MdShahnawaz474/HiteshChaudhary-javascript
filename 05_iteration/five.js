// For Each Loop:-

const programming= ["javascript","CPP","ruby","swift","python"];

// for each in arrow function
programming.forEach((val1)=>{
    // console.log(val1)
})

// for each in normal function:-

programming.forEach(function(val1){
    // console.log(val1)
})

// another method of for each loop:-

function PrintMe (item){
    console.log(item)
}

// programming.forEach(PrintMe);

// Some more parameter are passed in for each:-

// programming.forEach((item, index, arrylist)=>{
//     console.log(item, index, arrylist)
// })

const mycoding=[
    {
        languageName:"Javascript",
        languageFile:"js"
    },
    {
        languageName:"java",
        languageFile:"java"
    },
    {
        languageName:"python",
        languageFile:"py"
    },
    {
        languageName:"C++",
        languageFile:"Cpp"
    }
]

mycoding.forEach((val1)=>{
    console.log(val1.languageName)
});

