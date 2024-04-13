

for (let i=0 ; i<10 ; i++){
    const element  = i
    // console.log(element)
}


for (let i = 1 ; i <= 10; i++){
    // console.log(i)
}

for (let i = 0 ; i<=10; i++){
    const element = i
    if(element==5){
        // console.log("5 is my best number ")
    }
    if(element==6){
        // console.log("6 is also my best number")
    }
    // console.log(element)
}

for (let i =0 ; i<=10; i++){
    // console.log(`outer loop ${i}`)
    for(let j =0 ; j<=10; j++){
        // console.log(i + '*' + j + '=' + i*j);
    }
}

for (i =0 ; i<=10; i++){
    // console.log(`Table of ${i}`);
    for(j=0;  j<=10; j++){
        // console.log(i+ '*' + j + '=' + i*j)
    }
}

// Break and continue :-

for (i =0 ; i<=20;  i++){
    if(i==5){
        console.log("5 is detected")
    break
    }
    console.log(`value of i ${i}`)
}

//break and continue 2:-

for (i =1 ; i <=10; i++){
    if(i==5){
        console.log("5 is detected")
        break
    }
    console.log(`value of ${i}`)
}

for (i =1 ; i <=10; i++){
    if(i==5){
        console.log("5 is detected")
        continue
    }
    console.log(`value of ${i}`)
}
